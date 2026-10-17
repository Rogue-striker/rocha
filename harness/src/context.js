"use strict";

class PendingError extends Error {
  constructor(message = "sync skip; aborting execution") {
    super(message);
    this.name = "PendingError";
    this.isPending = true;
  }
}

class Context {
  constructor(runnable = null) {
    this.test = runnable;
    this._runnable = runnable;
    this._timeout = runnable && runnable.timeout !== undefined ? runnable.timeout : null;
    this._slow = runnable && runnable.slow !== undefined ? runnable.slow : 75;
    this._retries = runnable ? (runnable.retries || 0) : 0;
    this._currentRetry = runnable ? (runnable.currentRetry || 0) : 0;
    this._rescheduleTimer = null;
    this.onMultipleDone = null;
  }

  timeout(ms) {
    if (arguments.length === 0) return this._timeout !== null ? this._timeout : (this.test && this.test.timeout !== undefined ? this.test.timeout : 2000);
    this._timeout = Number(ms);
    if (this.test) this.test.timeout = this._timeout;
    if (typeof this._rescheduleTimer === "function") {
      this._rescheduleTimer(this._timeout);
    }
    return this;
  }

  slow(ms) {
    if (arguments.length === 0) return this._slow;
    this._slow = Number(ms);
    if (this.test) this.test.slow = this._slow;
    return this;
  }

  retries(n) {
    if (arguments.length === 0) return this._retries;
    this._retries = Number(n);
    if (this.test) this.test.retries = this._retries;
    return this;
  }

  currentRetry(n) {
    if (arguments.length === 0) return this._currentRetry;
    this._currentRetry = Number(n);
    if (this.test) this.test.currentRetry = this._currentRetry;
    return this;
  }

  skip() {
    throw new PendingError("sync skip; aborting execution");
  }
}

function cleanError(err) {
  if (!err) return {};
  const res = {};
  if (err.message !== undefined) res.message = err.message;
  if (err.stack !== undefined) res.stack = err.stack;
  if (err.name && err.name !== "Error") res.name = err.name;
  for (const key of Object.getOwnPropertyNames(err)) {
    if (key === "name" && err[key] === "Error") continue;
    res[key] = err[key];
  }
  return res;
}

/**
 * Execute a runnable with advanced async, done callback, promise, timeout, and uncaught tracking.
 */
function executeRunnable(fn, ctx, defaultTimeout = 2000) {
  return new Promise((resolve, reject) => {
    let settled = false;
    let timer = null;
    let doneCallCount = 0;

    const getTimeout = () => {
      if (ctx && typeof ctx._timeout === "number") {
        return ctx._timeout;
      }
      return defaultTimeout !== undefined ? defaultTimeout : 2000;
    };

    const cleanupListeners = () => {
      process.removeListener("uncaughtException", onUncaught);
      process.removeListener("unhandledRejection", onUnhandledRejection);
      if (ctx) ctx._rescheduleTimer = null;
    };

    const scheduleTimer = (ms) => {
      if (timer) clearTimeout(timer);
      if (ms > 0 && ms !== Infinity) {
        timer = setTimeout(() => {
          if (!settled) {
            settled = true;
            cleanupListeners();
            const title = ctx && ctx.test ? ctx.test.fullTitle() : "runnable";
            const file = ctx && ctx.test && ctx.test.file ? ` (${ctx.test.file})` : "";
            const err = new Error(`Timeout of ${ms}ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.${file}`);
            err.code = "ERR_MOCHA_TIMEOUT";
            reject(err);
          }
        }, ms);
        if (timer.unref) timer.unref();
      }
    };

    if (ctx) {
      ctx._rescheduleTimer = scheduleTimer;
    }

    scheduleTimer(getTimeout());

    const onUncaught = (err) => {
      if (!settled) {
        settled = true;
        cleanupListeners();
        if (timer) clearTimeout(timer);
        reject(err);
      }
    };

    const onUnhandledRejection = (reason) => {
      const err = reason instanceof Error ? reason : new Error(String(reason));
      onUncaught(err);
    };

    process.prependListener("uncaughtException", onUncaught);
    process.prependListener("unhandledRejection", onUnhandledRejection);

    const done = (err) => {
      doneCallCount++;
      if (doneCallCount > 1) {
        const title = ctx && ctx.test ? ctx.test.fullTitle() : "test";
        const file = ctx && ctx.test && ctx.test.file ? ctx.test.file : "dummy";
        const multiErr = new Error(`done() called multiple times in test <${title}> of file ${file}`);
        multiErr.code = "ERR_MOCHA_MULTIPLE_DONE";
        if (ctx && typeof ctx.onMultipleDone === "function") {
          ctx.onMultipleDone(multiErr);
        } else if (!settled) {
          settled = true;
          cleanupListeners();
          if (timer) clearTimeout(timer);
          reject(multiErr);
        }
        return;
      }

      if (settled) return;
      settled = true;
      cleanupListeners();
      if (timer) clearTimeout(timer);
      if (err) reject(err);
      else resolve();
    };

    try {
      if (fn.length > 0) {
        // Callback style with done(err)
        const result = fn.call(ctx, done);
        if (result && typeof result.then === "function") {
          const overErr = new Error("Resolution method is overspecified. Specify a callback *or* return a Promise; not both.");
          overErr.code = "ERR_MOCHA_OVER_SPECIFIED_TEST";
          done(overErr);
        }
      } else {
        // Sync or returning Promise
        const result = fn.call(ctx);
        if (result && typeof result.then === "function") {
          result.then(
            (val) => {
              if (settled) return;
              settled = true;
              cleanupListeners();
              if (timer) clearTimeout(timer);
              resolve(val);
            },
            (err) => {
              if (settled) return;
              settled = true;
              cleanupListeners();
              if (timer) clearTimeout(timer);
              reject(err);
            }
          );
        } else {
          settled = true;
          cleanupListeners();
          if (timer) clearTimeout(timer);
          resolve(result);
        }
      }
    } catch (err) {
      if (!settled) {
        settled = true;
        cleanupListeners();
        if (timer) clearTimeout(timer);
        reject(err);
      }
    }
  });
}

module.exports = {
  Context,
  PendingError,
  executeRunnable,
  cleanError,
};
