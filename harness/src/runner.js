"use strict";

const EventEmitter = require("node:events");
const { collectBeforeEachHooks, collectAfterEachHooks } = require("./hooks.js");
const { Context, PendingError, executeRunnable, cleanError } = require("./context.js");

class Runner extends EventEmitter {
  constructor(options = {}) {
    super();
    this.options = {
      grep: options.grep || null,
      fgrep: options.fgrep || null,
      invert: Boolean(options.invert),
      bail: options.bail || false,
      forbidOnly: Boolean(options.forbidOnly),
      forbidPending: Boolean(options.forbidPending),
      timeout: options.timeout !== undefined ? options.timeout : 2000,
      slow: options.slow !== undefined ? options.slow : 75,
    };

    this.stats = {
      suites: 0,
      tests: 0,
      passes: 0,
      pending: 0,
      failures: 0,
      start: null,
      end: null,
      duration: 0,
    };

    this.passes = [];
    this.pending = [];
    this.failures = [];
    this._bailed = false;
  }

  _collectExclusivity(suite, onlyTests = [], onlySuites = []) {
    if (suite._only) {
      onlySuites.push(suite);
    }
    if (Array.isArray(suite._onlySuites)) {
      for (const s of suite._onlySuites) {
        if (!onlySuites.includes(s)) onlySuites.push(s);
      }
    }
    for (const test of suite.tests) {
      if (test._only) {
        onlyTests.push(test);
      }
    }
    if (Array.isArray(suite._onlyTests)) {
      for (const t of suite._onlyTests) {
        if (!onlyTests.includes(t)) onlyTests.push(t);
      }
    }
    for (const child of suite.suites) {
      this._collectExclusivity(child, onlyTests, onlySuites);
    }
    return { onlyTests, onlySuites };
  }

  _isTestExclusive(test, onlyTests, onlySuites) {
    if (onlyTests.length > 0) {
      return test._only || onlyTests.includes(test);
    }
    if (onlySuites.length > 0) {
      let curr = test.suite;
      while (curr) {
        if (curr._only || onlySuites.includes(curr)) return true;
        curr = curr.parent;
      }
      return false;
    }
    return true;
  }

  _matchesFilter(test) {
    const fullTitle = test.fullTitle();
    let matches = true;

    if (this.options.fgrep) {
      matches = fullTitle.includes(this.options.fgrep);
    } else if (this.options.grep) {
      const re = typeof this.options.grep === "string" ? new RegExp(this.options.grep) : this.options.grep;
      matches = re.test(fullTitle);
    }

    if (this.options.invert) {
      matches = !matches;
    }

    return matches;
  }

  _hasRunnableTests(suite, onlyTests, onlySuites) {
    for (const test of suite.tests) {
      if (this._isTestExclusive(test, onlyTests, onlySuites) && this._matchesFilter(test)) {
        return true;
      }
    }
    for (const child of suite.suites) {
      if (this._hasRunnableTests(child, onlyTests, onlySuites)) {
        return true;
      }
    }
    return false;
  }

  async run(rootSuite) {
    this.stats.start = new Date().toISOString();
    const startTime = Date.now();
    this.emit("start");

    const { onlyTests, onlySuites } = this._collectExclusivity(rootSuite);

    if (this.options.forbidOnly && (onlyTests.length > 0 || onlySuites.length > 0)) {
      const err = new Error("`.only` forbidden by --forbid-only");
      err.code = "ERR_MOCHA_FORBIDDEN_EXCLUSIVITY";
      this.emit("error", err);
      throw err;
    }

    const rootContext = new Context(rootSuite);
    await this._runSuite(rootSuite, rootContext, onlyTests, onlySuites, true);

    const endTime = Date.now();
    this.stats.end = new Date().toISOString();
    this.stats.duration = endTime - startTime;
    this.emit("end");

    return this.toJson();
  }

  async _runSuite(suite, parentContext, onlyTests, onlySuites, isRoot = false) {
    if (this._bailed) return;

    if (!isRoot && !this._hasRunnableTests(suite, onlyTests, onlySuites)) {
      return;
    }

    const suiteContext = new Context(suite);
    Object.assign(suiteContext, parentContext);

    if (!isRoot) {
      this.stats.suites++;
      this.emit("suite", suite);
    }

    let suiteAborted = false;
    let suiteSkipped = false;

    // 1. Run suite beforeAll hooks
    if (Array.isArray(suite._beforeAll)) {
      for (const hook of suite._beforeAll) {
        if (this._bailed) break;
        this.emit("hook", hook);
        const hookCtx = new Context(hook);
        Object.assign(hookCtx, suiteContext);
        try {
          await executeRunnable(hook.fn, hookCtx, hook.timeout || (typeof suite.timeout === "function" ? suite.timeout() : suite.timeout));
        } catch (err) {
          if (err instanceof PendingError) {
            suiteSkipped = true;
            break;
          }
          suiteAborted = true;
          this.stats.failures++;
          this.failures.push({
            title: `\"${hook.type}\" hook for \"${suite.title || "root"}\"`,
            fullTitle: suite.fullTitle() ? `${suite.fullTitle()} \"${hook.type}\" hook` : `\"${hook.type}\" hook`,
            err: cleanError(err),
          });
          this.emit("fail", hook, err);
          if (this.options.bail || suite._bail) this._bailed = true;
          break;
        } finally {
          this.emit("hook end", hook);
        }
      }
    }

    // If beforeAll hook called this.skip(), mark all suite tests as pending
    if (suiteSkipped) {
      for (const test of suite.tests) {
        this.stats.tests++;
        this.stats.pending++;
        this.pending.push({
          title: test.title,
          fullTitle: test.fullTitle(),
        });
        this.emit("pending", test);
      }
    }

    // 2. If beforeAll hooks succeeded and suite wasn't skipped, run tests and child suites
    if (!suiteAborted && !suiteSkipped && !this._bailed) {
      for (const test of suite.tests) {
        if (this._bailed || suiteAborted) break;

        if (!this._isTestExclusive(test, onlyTests, onlySuites)) {
          continue;
        }

        if (!this._matchesFilter(test)) {
          continue;
        }

        if (test.isPending()) {
          if (this.options.forbidPending) {
            const err = new Error("Pending test forbidden");
            this.stats.failures++;
            this.failures.push({
              title: test.title,
              fullTitle: test.fullTitle(),
              err: { name: "Error", message: err.message, stack: err.stack },
            });
            this.emit("fail", test, err);
            if (this.options.bail || suite._bail) this._bailed = true;
          } else {
            this.stats.tests++;
            this.stats.pending++;
            this.pending.push({
              title: test.title,
              fullTitle: test.fullTitle(),
            });
            this.emit("pending", test);
          }
          continue;
        }

        // Active test execution with retry support
        this.stats.tests++;
        this.emit("test", test);

        const testStartTime = Date.now();
        let attempt = 0;
        let testPassed = false;
        let testSkipped = false;
        let stepFailed = false;
        let finalErr = null;

        while (true) {
          stepFailed = false;
          const testContext = Object.create(suiteContext);
          testContext.test = test;
          testContext._runnable = test;
          testContext._timeout = test.timeout !== undefined ? test.timeout : 2000;
          testContext._slow = test.slow !== undefined ? test.slow : 75;
          testContext._retries = typeof suiteContext._retries === "number" && suiteContext._retries > 0 
            ? suiteContext._retries 
            : (test.retries || 0);
          testContext._currentRetry = attempt;
          testContext.timeout = function(ms) {
            if (!arguments.length) return this._timeout !== null && this._timeout !== undefined ? this._timeout : 2000;
            this._timeout = Number(ms);
            if (this.test && typeof this.test.timeout === "function") this.test.timeout(this._timeout);
            if (typeof this._rescheduleTimer === "function") {
              this._rescheduleTimer(this._timeout);
            }
            return this;
          };
          testContext.slow = function(ms) {
            if (!arguments.length) return this._slow !== null && this._slow !== undefined ? this._slow : 75;
            this._slow = Number(ms);
            if (this.test && typeof this.test.slow === "function") this.test.slow(this._slow);
            return this;
          };
          testContext.retries = function(n) {
            if (!arguments.length) return this._retries !== null && this._retries !== undefined ? this._retries : 0;
            this._retries = Number(n);
            if (this.test && typeof this.test.retries === "function") this.test.retries(this._retries);
            return this;
          };
          testContext.currentRetry = function(n) { if (!arguments.length) return this._currentRetry; this._currentRetry = Number(n); return this; };
          testContext.skip = function() { throw new PendingError("sync skip; aborting execution"); };
          testContext.onMultipleDone = (multiErr) => {
            this.stats.failures++;
            this.failures.push({
              title: test.title,
              fullTitle: test.fullTitle(),
              duration: 0,
              currentRetry: attempt,
              err: cleanError(multiErr),
            });
            this.emit("fail", test, multiErr);
            if (this.options.bail || suite._bail) this._bailed = true;
          };

          const beforeEachHooks = collectBeforeEachHooks(test);
          const afterEachHooks = collectAfterEachHooks(test);

          let stepErr = null;

          // Run beforeEach hooks (outer -> inner)
          for (const hook of beforeEachHooks) {
            this.emit("hook", hook);
            testContext._runnable = hook;
            try {
              await executeRunnable(hook.fn, testContext, hook.timeout || test.timeout);
            } catch (err) {
              if (err instanceof PendingError) {
                testSkipped = true;
                break;
              }
              stepFailed = true;
              stepErr = err;
              suiteAborted = true;
              break;
            } finally {
              this.emit("hook end", hook);
            }
          }

          if (testSkipped) break;

          // Run test body
          if (!stepFailed) {
            testContext._runnable = test;
            try {
              await executeRunnable(test.fn, testContext, testContext._timeout);
              testPassed = true;
            } catch (err) {
              if (err instanceof PendingError) {
                testSkipped = true;
              } else {
                stepFailed = true;
                stepErr = err;
              }
            }
          }

          if (testSkipped) break;

          // Run afterEach hooks (inner -> outer)
          for (const hook of afterEachHooks) {
            this.emit("hook", hook);
            testContext._runnable = hook;
            try {
              await executeRunnable(hook.fn, testContext, hook.timeout || test.timeout);
            } catch (err) {
              if (!stepFailed) {
                stepFailed = true;
                stepErr = err;
              }
              suiteAborted = true;
            } finally {
              this.emit("hook end", hook);
            }
          }

          if (testPassed && !stepFailed) {
            break;
          }

          finalErr = stepErr;
          const allowedRetries = typeof testContext._retries === "number" && testContext._retries > 0
            ? testContext._retries
            : (typeof test.retries === "number" && test.retries > 0
              ? test.retries
              : (typeof suiteContext._retries === "number" && suiteContext._retries > 0 ? suiteContext._retries : 0));

          if (attempt < allowedRetries) {
            attempt++;
            this.emit("retry", test);
            testPassed = false;
            stepFailed = false;
            suiteAborted = false;
            continue;
          }
          break;
        }

        const duration = Date.now() - testStartTime;

        if (testSkipped) {
          this.stats.pending++;
          this.pending.push({
            title: test.title,
            fullTitle: test.fullTitle(),
          });
          this.emit("pending", test);
        } else if (testPassed && !stepFailed) {
          this.stats.passes++;
          this.passes.push({
            title: test.title,
            fullTitle: test.fullTitle(),
            duration,
            currentRetry: attempt,
          });
          this.emit("pass", test);
        } else {
          this.stats.failures++;
          this.failures.push({
            title: test.title,
            fullTitle: test.fullTitle(),
            duration,
            currentRetry: attempt,
            err: cleanError(finalErr),
          });
          this.emit("fail", test, finalErr);
          if (this.options.bail || suite._bail) this._bailed = true;
        }

        this.emit("test end", test);
      }

      if (!this._bailed && !suiteAborted) {
        for (const child of suite.suites) {
          if (this._bailed) break;
          await this._runSuite(child, suiteContext, onlyTests, onlySuites, false);
        }
      }
    }

    // 3. Run suite afterAll hooks
    if (Array.isArray(suite._afterAll)) {
      for (const hook of suite._afterAll) {
        this.emit("hook", hook);
        const hookCtx = new Context(hook);
        Object.assign(hookCtx, suiteContext);
        try {
          await executeRunnable(hook.fn, hookCtx, hook.timeout || (typeof suite.timeout === "function" ? suite.timeout() : suite.timeout));
        } catch (err) {
          this.stats.failures++;
          this.failures.push({
            title: `\"${hook.type}\" hook for \"${suite.title || "root"}\"`,
            fullTitle: suite.fullTitle() ? `${suite.fullTitle()} \"${hook.type}\" hook` : `\"${hook.type}\" hook`,
            err: cleanError(err),
          });
          this.emit("fail", hook, err);
          if (this.options.bail || suite._bail) this._bailed = true;
          break;
        } finally {
          this.emit("hook end", hook);
        }
      }
    }

    if (!isRoot) {
      this.emit("suite end", suite);
    }
  }

  toJson() {
    return {
      stats: {
        suites: this.stats.suites,
        tests: this.stats.tests,
        passes: this.stats.passes,
        pending: this.stats.pending,
        failures: this.stats.failures,
        start: this.stats.start,
        end: this.stats.end,
        duration: this.stats.duration,
      },
      passes: this.passes,
      pending: this.pending,
      failures: this.failures,
    };
  }
}

module.exports = {
  Runner,
};
