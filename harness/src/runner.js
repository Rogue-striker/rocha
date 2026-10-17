"use strict";

const EventEmitter = require("node:events");
const { collectBeforeEachHooks, collectAfterEachHooks, runRunnable } = require("./hooks.js");

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

  /**
   * Scan tree to collect all .only tests and suites
   */
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

  /**
   * Determine if a test satisfies .only exclusivity
   */
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

  /**
   * Determine if a test matches grep / fgrep / invert filters
   */
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

  /**
   * Check if a suite has any runnable or active descendant tests
   */
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

  /**
   * Execute the suite tree depth-first.
   */
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

    const rootContext = {};
    await this._runSuite(rootSuite, rootContext, onlyTests, onlySuites, true);

    const endTime = Date.now();
    this.stats.end = new Date().toISOString();
    this.stats.duration = endTime - startTime;
    this.emit("end");

    return this.toJson();
  }

  async _runSuite(suite, parentContext, onlyTests, onlySuites, isRoot = false) {
    if (this._bailed) return;

    // Skip entering empty or completely filtered suites (unless root)
    if (!isRoot && !this._hasRunnableTests(suite, onlyTests, onlySuites)) {
      return;
    }

    const suiteContext = Object.create(parentContext);
    if (!isRoot) {
      this.stats.suites++;
      this.emit("suite", suite);
    }

    let suiteAborted = false;

    // 1. Run suite beforeAll hooks
    if (Array.isArray(suite._beforeAll)) {
      for (const hook of suite._beforeAll) {
        if (this._bailed) break;
        this.emit("hook", hook);
        try {
          await runRunnable(hook.fn, suiteContext, hook.timeout || suite.timeout);
        } catch (err) {
          suiteAborted = true;
          this.stats.failures++;
          this.failures.push({
            title: `"${hook.type}" hook for "${suite.title || "root"}"`,
            fullTitle: suite.fullTitle() ? `${suite.fullTitle()} "${hook.type}" hook` : `"${hook.type}" hook`,
            err: { name: err.name || "Error", message: err.message || String(err), stack: err.stack },
          });
          this.emit("fail", hook, err);
          if (this.options.bail || suite._bail) this._bailed = true;
          break;
        } finally {
          this.emit("hook end", hook);
        }
      }
    }

    // 2. If beforeAll hooks succeeded, run tests and child suites
    if (!suiteAborted && !this._bailed) {
      for (const test of suite.tests) {
        if (this._bailed || suiteAborted) break;

        // Check exclusivity
        if (!this._isTestExclusive(test, onlyTests, onlySuites)) {
          continue;
        }

        // Check filter
        if (!this._matchesFilter(test)) {
          continue;
        }

        // Check pending
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
            this.stats.pending++;
            this.pending.push({
              title: test.title,
              fullTitle: test.fullTitle(),
            });
            this.emit("pending", test);
          }
          continue;
        }

        // Active test execution
        this.stats.tests++;
        this.emit("test", test);
        const testContext = Object.create(suiteContext);
        const beforeEachHooks = collectBeforeEachHooks(test);
        const afterEachHooks = collectAfterEachHooks(test);

        let testFailed = false;
        let testErr = null;
        const testStartTime = Date.now();

        // Run beforeEach hooks (outer -> inner)
        for (const hook of beforeEachHooks) {
          this.emit("hook", hook);
          try {
            await runRunnable(hook.fn, testContext, hook.timeout || test.timeout);
          } catch (err) {
            testFailed = true;
            testErr = err;
            suiteAborted = true; // beforeEach failure aborts suite
            break;
          } finally {
            this.emit("hook end", hook);
          }
        }

        // Run test body if beforeEach hooks passed
        if (!testFailed) {
          try {
            await runRunnable(test.fn, testContext, test.timeout);
          } catch (err) {
            testFailed = true;
            testErr = err;
          }
        }

        // Run afterEach hooks (inner -> outer) - always run after test or beforeEach
        for (const hook of afterEachHooks) {
          this.emit("hook", hook);
          try {
            await runRunnable(hook.fn, testContext, hook.timeout || test.timeout);
          } catch (err) {
            if (!testFailed) {
              testFailed = true;
              testErr = err;
            }
            suiteAborted = true; // afterEach failure aborts suite
          } finally {
            this.emit("hook end", hook);
          }
        }

        const duration = Date.now() - testStartTime;

        if (testFailed) {
          this.stats.failures++;
          this.failures.push({
            title: test.title,
            fullTitle: test.fullTitle(),
            duration,
            err: {
              name: testErr ? testErr.name || "Error" : "Error",
              message: testErr ? testErr.message || String(testErr) : "Unknown error",
              stack: testErr ? testErr.stack : "",
            },
          });
          this.emit("fail", test, testErr);
          if (this.options.bail || suite._bail) this._bailed = true;
        } else {
          this.stats.passes++;
          this.passes.push({
            title: test.title,
            fullTitle: test.fullTitle(),
            duration,
          });
          this.emit("pass", test);
        }
        this.emit("test end", test);
      }

      // Depth-first traversal into child suites
      if (!this._bailed && !suiteAborted) {
        for (const child of suite.suites) {
          if (this._bailed) break;
          await this._runSuite(child, suiteContext, onlyTests, onlySuites, false);
        }
      }
    }

    // 3. Run suite afterAll hooks (runs even if beforeAll or tests failed!)
    if (Array.isArray(suite._afterAll)) {
      for (const hook of suite._afterAll) {
        this.emit("hook", hook);
        try {
          await runRunnable(hook.fn, suiteContext, hook.timeout || suite.timeout);
        } catch (err) {
          this.stats.failures++;
          this.failures.push({
            title: `"${hook.type}" hook for "${suite.title || "root"}"`,
            fullTitle: suite.fullTitle() ? `${suite.fullTitle()} "${hook.type}" hook` : `"${hook.type}" hook`,
            err: { name: err.name || "Error", message: err.message || String(err), stack: err.stack },
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
