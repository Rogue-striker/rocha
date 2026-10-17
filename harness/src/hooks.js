"use strict";

const { Hook } = require("./interface-bdd.js");

/**
 * Collect all beforeEach hooks that apply to a test, in outer -> inner order.
 * Root suite hooks run first, followed by child suites down to test.suite.
 * Within each suite, hooks run in definition order.
 */
function collectBeforeEachHooks(test) {
  if (!test || !test.suite) return [];
  const suites = [];
  let curr = test.suite;
  while (curr) {
    suites.unshift(curr);
    curr = curr.parent;
  }
  const hooks = [];
  for (const suite of suites) {
    if (Array.isArray(suite._beforeEach)) {
      hooks.push(...suite._beforeEach);
    }
  }
  return hooks;
}

/**
 * Collect all afterEach hooks that apply to a test, in inner -> outer order.
 * Immediate parent suite hooks run first, followed by ancestor suites up to root.
 * Within each suite, hooks run in definition order.
 */
function collectAfterEachHooks(test) {
  if (!test || !test.suite) return [];
  const suites = [];
  let curr = test.suite;
  while (curr) {
    suites.push(curr);
    curr = curr.parent;
  }
  const hooks = [];
  for (const suite of suites) {
    if (Array.isArray(suite._afterEach)) {
      hooks.push(...suite._afterEach);
    }
  }
  return hooks;
}

/**
 * Execute a runnable function (hook or test) with timeout and callback/Promise support.
 */
function runRunnable(fn, ctx, timeoutMs = 2000) {
  return new Promise((resolve, reject) => {
    let settled = false;
    let timer = null;

    if (timeoutMs > 0 && timeoutMs !== Infinity) {
      timer = setTimeout(() => {
        if (!settled) {
          settled = true;
          const err = new Error(`Timeout of ${timeoutMs}ms exceeded.`);
          err.code = "ERR_MOCHA_TIMEOUT";
          reject(err);
        }
      }, timeoutMs);
    }

    const done = (err) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      if (err) reject(err);
      else resolve();
    };

    try {
      if (fn.length > 0) {
        const res = fn.call(ctx, done);
        if (res && typeof res.then === "function") {
          res.then(
            () => {},
            (err) => {
              if (!settled) done(err);
            }
          );
        }
      } else {
        const res = fn.call(ctx);
        if (res && typeof res.then === "function") {
          res.then(
            (val) => {
              if (settled) return;
              settled = true;
              if (timer) clearTimeout(timer);
              resolve(val);
            },
            (err) => {
              if (settled) return;
              settled = true;
              if (timer) clearTimeout(timer);
              reject(err);
            }
          );
        } else {
          settled = true;
          if (timer) clearTimeout(timer);
          resolve(res);
        }
      }
    } catch (err) {
      if (!settled) {
        settled = true;
        if (timer) clearTimeout(timer);
        reject(err);
      }
    }
  });
}

/**
 * Apply a root hook plugin (e.g. mochaHooks exports) to the root suite.
 */
async function applyMochaHooks(rootSuite, plugin) {
  if (!plugin || !rootSuite) return;

  let hooksObj = plugin;
  if (typeof plugin === "function") {
    hooksObj = await plugin();
  }

  const list = Array.isArray(hooksObj) ? hooksObj : [hooksObj];

  for (const obj of list) {
    if (!obj || typeof obj !== "object") continue;

    if (obj.beforeAll) {
      const fns = Array.isArray(obj.beforeAll) ? obj.beforeAll : [obj.beforeAll];
      for (const fn of fns) {
        if (typeof fn === "function") rootSuite.addBeforeAll(fn, "\"before all\" hook (root)");
      }
    }
    if (obj.beforeEach) {
      const fns = Array.isArray(obj.beforeEach) ? obj.beforeEach : [obj.beforeEach];
      for (const fn of fns) {
        if (typeof fn === "function") rootSuite.addBeforeEach(fn, "\"before each\" hook (root)");
      }
    }
    if (obj.afterEach) {
      const fns = Array.isArray(obj.afterEach) ? obj.afterEach : [obj.afterEach];
      for (const fn of fns) {
        if (typeof fn === "function") rootSuite.addAfterEach(fn, "\"after each\" hook (root)");
      }
    }
    if (obj.afterAll) {
      const fns = Array.isArray(obj.afterAll) ? obj.afterAll : [obj.afterAll];
      for (const fn of fns) {
        if (typeof fn === "function") rootSuite.addAfterAll(fn, "\"after all\" hook (root)");
      }
    }
  }
}

module.exports = {
  collectBeforeEachHooks,
  collectAfterEachHooks,
  runRunnable,
  applyMochaHooks,
};
