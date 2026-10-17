"use strict";

const { Suite, Test, Hook } = require("./interface-bdd.js");

/**
 * Creates and registers QUnit interface functions into target context.
 *
 * Supports both declarative `suite('name')` and block `suite('name', fn)`.
 */
function createQunitInterface(context, rootSuite, options = {}) {
  let currentSuite = rootSuite;

  function suite(title, fn) {
    if (typeof fn === "function") {
      const s = new Suite(title, currentSuite, options.file);
      currentSuite.addSuite(s);

      const prevSuite = currentSuite;
      currentSuite = s;
      try {
        fn.call(s);
      } finally {
        currentSuite = prevSuite;
      }
      return s;
    } else {
      // Declarative QUnit style: switches active suite under rootSuite
      if (currentSuite !== rootSuite) {
        currentSuite = rootSuite;
      }
      const s = new Suite(title, currentSuite, options.file);
      currentSuite.addSuite(s);
      currentSuite = s;
      return s;
    }
  }

  suite.only = function (title, fn) {
    if (typeof fn === "function") {
      const s = new Suite(title, currentSuite, options.file);
      s._only = true;
      currentSuite._onlySuites.push(s);
      currentSuite.addSuite(s);

      const prevSuite = currentSuite;
      currentSuite = s;
      try {
        fn.call(s);
      } finally {
        currentSuite = prevSuite;
      }
      return s;
    } else {
      if (currentSuite !== rootSuite) {
        currentSuite = rootSuite;
      }
      const s = new Suite(title, currentSuite, options.file);
      s._only = true;
      rootSuite._onlySuites.push(s);
      rootSuite.addSuite(s);
      currentSuite = s;
      return s;
    }
  };

  suite.skip = function (title, fn) {
    if (typeof fn === "function") {
      const s = new Suite(title, currentSuite, options.file);
      s.pending = true;
      currentSuite.addSuite(s);

      const prevSuite = currentSuite;
      currentSuite = s;
      try {
        fn.call(s);
      } finally {
        currentSuite = prevSuite;
      }
      return s;
    } else {
      if (currentSuite !== rootSuite) {
        currentSuite = rootSuite;
      }
      const s = new Suite(title, currentSuite, options.file);
      s.pending = true;
      rootSuite.addSuite(s);
      currentSuite = s;
      return s;
    }
  };

  function test(title, fn) {
    if (currentSuite.isPending()) {
      fn = null;
    }
    const t = new Test(title, fn, currentSuite);
    currentSuite.addTest(t);
    return t;
  }

  test.only = function (title, fn) {
    const t = test(title, fn);
    t._only = true;
    currentSuite._onlyTests.push(t);
    return t;
  };

  test.skip = function (title, fn) {
    const t = test(title, null);
    t.pending = true;
    return t;
  };

  function before(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addBeforeAll(hookFn, title);
  }

  function after(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addAfterAll(hookFn, title);
  }

  function beforeEach(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addBeforeEach(hookFn, title);
  }

  function afterEach(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addAfterEach(hookFn, title);
  }

  const qunitApi = {
    suite,
    test,
    before,
    after,
    beforeEach,
    afterEach,
    setup: beforeEach,
    teardown: afterEach,
  };

  for (const [key, val] of Object.entries(qunitApi)) {
    context[key] = val;
  }

  return {
    qunitApi,
    getCurrentSuite: () => currentSuite,
  };
}

module.exports = {
  createQunitInterface,
};
