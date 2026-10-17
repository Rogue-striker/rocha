"use strict";

const { Suite, Test, Hook } = require("./interface-bdd.js");

/**
 * Creates and registers TDD interface functions into target context.
 *
 * Traditional suite / test / suiteSetup / suiteTeardown / setup / teardown.
 */
function createTddInterface(context, rootSuite, options = {}) {
  let currentSuite = rootSuite;

  function suite(title, fn) {
    const s = new Suite(title, currentSuite, options.file);
    currentSuite.addSuite(s);

    const prevSuite = currentSuite;
    currentSuite = s;
    try {
      if (typeof fn === "function") {
        fn.call(s);
      }
    } finally {
      currentSuite = prevSuite;
    }
    return s;
  }

  suite.only = function (title, fn) {
    const s = new Suite(title, currentSuite, options.file);
    s._only = true;
    currentSuite._onlySuites.push(s);
    currentSuite.addSuite(s);

    const prevSuite = currentSuite;
    currentSuite = s;
    try {
      if (typeof fn === "function") {
        fn.call(s);
      }
    } finally {
      currentSuite = prevSuite;
    }
    return s;
  };

  suite.skip = function (title, fn) {
    const s = new Suite(title, currentSuite, options.file);
    s.pending = true;
    currentSuite.addSuite(s);

    const prevSuite = currentSuite;
    currentSuite = s;
    try {
      if (typeof fn === "function") {
        fn.call(s);
      }
    } finally {
      currentSuite = prevSuite;
    }
    return s;
  };

  suite.retries = function (n) {
    currentSuite.retries = n;
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

  test.retries = function (n) {
    if (currentSuite.tests.length > 0) {
      currentSuite.tests[currentSuite.tests.length - 1].retries = n;
    }
  };

  function suiteSetup(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addBeforeAll(hookFn, title);
  }

  function suiteTeardown(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addAfterAll(hookFn, title);
  }

  function setup(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addBeforeEach(hookFn, title);
  }

  function teardown(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === "string";
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addAfterEach(hookFn, title);
  }

  const tddApi = {
    suite,
    test,
    suiteSetup,
    suiteTeardown,
    setup,
    teardown,
  };

  for (const [key, val] of Object.entries(tddApi)) {
    context[key] = val;
  }

  return {
    tddApi,
    getCurrentSuite: () => currentSuite,
  };
}

module.exports = {
  createTddInterface,
};
