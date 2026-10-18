'use strict';

let suiteIdCounter = 1;
let testIdCounter = 1;
let hookIdCounter = 1;

function resetCounters() {
  suiteIdCounter = 1;
  testIdCounter = 1;
  hookIdCounter = 1;
}

class Hook {
  constructor(type, title, fn, suite) {
    this.id = `h_${hookIdCounter++}`;
    this.type = type; // 'before', 'after', 'beforeEach', 'afterEach'
    this.title = title || `"${type}" hook`;
    this.fn = fn;
    this.suite = suite;
    this.timeout = suite ? suite.timeout : 2000;
  }
}

class Test {
  constructor(title, fn, suite) {
    this.id = `t_${testIdCounter++}`;
    this.title = title;
    this.fn = fn;
    this.suite = suite;
    this.pending = !fn || (suite ? suite.isPending() : false);
    this._only = false;
    this._timeout = suite ? (typeof suite.timeout === "function" ? suite.timeout() : suite.timeout) : 2000;
    this._slow = suite ? (typeof suite.slow === "function" ? suite.slow() : suite.slow) : 75;
    this._retries = suite ? (typeof suite.retries === "function" ? suite.retries() : suite.retries) : 0;
    this.file = suite ? suite.file : '';
  }

  timeout(ms) {
    if (arguments.length === 0) return this._timeout !== undefined ? this._timeout : 2000;
    this._timeout = Number(ms);
    return this;
  }

  slow(ms) {
    if (arguments.length === 0) return this._slow !== undefined ? this._slow : 75;
    this._slow = Number(ms);
    return this;
  }

  retries(n) {
    if (arguments.length === 0) return this._retries !== undefined ? this._retries : 0;
    this._retries = Number(n);
    return this;
  }

  isPending() {
    return Boolean(this.pending || (this.suite && this.suite.isPending()));
  }

  fullTitle() {
    if (this._cachedFullTitle !== undefined) return this._cachedFullTitle;
    if (!this.suite || !this.suite.title) {
      this._cachedFullTitle = this.title;
    } else {
      const parentTitle = this.suite.fullTitle();
      this._cachedFullTitle = parentTitle ? `${parentTitle} ${this.title}` : this.title;
    }
    return this._cachedFullTitle;
  }
}

class Suite {
  constructor(title, parent = null, file = '') {
    this.id = `s_${suiteIdCounter++}`;
    this.title = title || '';
    this.parent = parent;
    this.file = file || (parent ? parent.file : '');
    this.suites = [];
    this.tests = [];
    this._beforeAll = [];
    this._afterAll = [];
    this._beforeEach = [];
    this._afterEach = [];
    this.pending = parent ? parent.isPending() : false;
    this._only = false;
    this._onlySuites = [];
    this._onlyTests = [];
    this._timeout = parent ? (typeof parent.timeout === "function" ? parent.timeout() : parent.timeout) : 2000;
    this._slow = parent ? (typeof parent.slow === "function" ? parent.slow() : parent.slow) : 75;
    this._retries = parent ? (typeof parent.retries === "function" ? parent.retries() : parent.retries) : 0;
    this.delayed = false;
    this._bail = false;
  }

  retries(n) {
    if (arguments.length === 0) return this._retries;
    this._retries = Number(n);
    return this;
  }

  timeout(ms) {
    if (arguments.length === 0) return this.timeout;
    this.timeout = Number(ms);
    return this;
  }

  slow(ms) {
    if (arguments.length === 0) return this.slow;
    this.slow = Number(ms);
    return this;
  }

  bail(val) {
    if (arguments.length === 0) return this._bail;
    this._bail = Boolean(val);
    return this;
  }

  getRoot() {
    let curr = this;
    while (curr.parent) curr = curr.parent;
    return curr;
  }

  timeout(ms) {
    if (arguments.length === 0) return this._timeout !== undefined ? this._timeout : 2000;
    this._timeout = Number(ms);
    return this;
  }

  slow(ms) {
    if (arguments.length === 0) return this._slow !== undefined ? this._slow : 75;
    this._slow = Number(ms);
    return this;
  }

  retries(n) {
    if (arguments.length === 0) return this._retries !== undefined ? this._retries : 0;
    this._retries = Number(n);
    return this;
  }

  isPending() {
    return Boolean(this.pending || (this.parent && this.parent.isPending()));
  }

  hasOnly() {
    return (
      this._onlyTests.length > 0 ||
      this._onlySuites.length > 0 ||
      this.suites.some(suite => suite.hasOnly())
    );
  }

  fullTitle() {
    if (this._cachedFullTitle !== undefined) return this._cachedFullTitle;
    if (!this.parent || !this.parent.title) {
      this._cachedFullTitle = this.title;
    } else {
      const parentTitle = this.parent.fullTitle();
      this._cachedFullTitle = parentTitle ? `${parentTitle} ${this.title}` : this.title;
    }
    return this._cachedFullTitle;
  }

  addSuite(suite) {
    suite.parent = this;
    if (this.isPending()) {
      suite.pending = true;
    }
    if (!suite.file && this.file) suite.file = this.file;
    this.suites.push(suite);
    return suite;
  }

  addTest(test) {
    test.suite = this;
    if (this.isPending()) {
      test.pending = true;
    }
    if (!test.file && this.file) test.file = this.file;
    this.tests.push(test);
    return test;
  }

  addBeforeAll(fn, title) {
    const hook = new Hook('before', title, fn, this);
    this._beforeAll.push(hook);
    return hook;
  }

  addAfterAll(fn, title) {
    const hook = new Hook('after', title, fn, this);
    this._afterAll.push(hook);
    return hook;
  }

  addBeforeEach(fn, title) {
    const hook = new Hook('beforeEach', title, fn, this);
    this._beforeEach.push(hook);
    return hook;
  }

  addAfterEach(fn, title) {
    const hook = new Hook('afterEach', title, fn, this);
    this._afterEach.push(hook);
    return hook;
  }

  toTree() {
    const isOnly = this.parent && this.parent._onlySuites ? this.parent._onlySuites.includes(this) : false;
    return {
      title: this.title,
      pending: this.isPending(),
      only: Boolean(isOnly),
      beforeAll: this._beforeAll.length,
      afterAll: this._afterAll.length,
      beforeEach: this._beforeEach.length,
      afterEach: this._afterEach.length,
      tests: this.tests.map(t => ({
        title: t.title,
        pending: t.isPending(),
        only: Boolean(this._onlyTests.includes(t)),
      })),
      suites: this.suites.map(s => s.toTree()),
    };
  }
}

/**
 * Creates and registers BDD interface functions into target context.
 */
function createBddInterface(context, rootSuite, options = {}) {
  let currentSuite = rootSuite;

  function describe(title, fn) {
    const suite = new Suite(title, currentSuite, options.file);
    currentSuite.addSuite(suite);

    const prevSuite = currentSuite;
    currentSuite = suite;
    try {
      if (typeof fn === 'function') {
        fn.call(suite);
      }
    } finally {
      currentSuite = prevSuite;
    }
    return suite;
  }

  describe.only = function(title, fn) {
    const suite = new Suite(title, currentSuite, options.file);
    suite._only = true;
    currentSuite._onlySuites.push(suite);
    currentSuite.addSuite(suite);

    const prevSuite = currentSuite;
    currentSuite = suite;
    try {
      if (typeof fn === 'function') {
        fn.call(suite);
      }
    } finally {
      currentSuite = prevSuite;
    }
    return suite;
  };

  describe.skip = function(title, fn) {
    const suite = new Suite(title, currentSuite, options.file);
    suite.pending = true;
    currentSuite.addSuite(suite);

    const prevSuite = currentSuite;
    currentSuite = suite;
    try {
      if (typeof fn === 'function') {
        fn.call(suite);
      }
    } finally {
      currentSuite = prevSuite;
    }
    return suite;
  };

  describe.retries = function(n) {
    currentSuite.retries = n;
  };

  function it(title, fn) {
    if (currentSuite.isPending()) {
      fn = null;
    }
    const test = new Test(title, fn, currentSuite);
    currentSuite.addTest(test);
    return test;
  }

  it.only = function(title, fn) {
    const test = it(title, fn);
    test._only = true;
    currentSuite._onlyTests.push(test);
    return test;
  };

  it.skip = function(title, fn) {
    const test = it(title, null);
    test.pending = true;
    return test;
  };

  it.retries = function(n) {
    if (currentSuite.tests.length > 0) {
      currentSuite.tests[currentSuite.tests.length - 1].retries = n;
    }
  };

  function before(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === 'string';
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addBeforeAll(hookFn, title);
  }

  function after(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === 'string';
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addAfterAll(hookFn, title);
  }

  function beforeEach(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === 'string';
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addBeforeEach(hookFn, title);
  }

  function afterEach(titleOrFn, fn) {
    const hasTitle = typeof titleOrFn === 'string';
    const hookFn = hasTitle ? fn : titleOrFn;
    const title = hasTitle ? titleOrFn : undefined;
    return currentSuite.addAfterEach(hookFn, title);
  }

  // Aliases
  const contextFunc = describe;
  const specify = it;
  const xdescribe = describe.skip;
  const xcontext = describe.skip;
  const xit = it.skip;
  const xspecify = it.skip;

  const bddApi = {
    describe,
    context: contextFunc,
    xdescribe,
    xcontext,
    it,
    specify,
    xit,
    xspecify,
    before,
    after,
    beforeEach,
    afterEach,
  };

  for (const [key, val] of Object.entries(bddApi)) {
    context[key] = val;
  }

  return {
    bddApi,
    getCurrentSuite: () => currentSuite,
  };
}

module.exports = {
  Suite,
  Test,
  Hook,
  createBddInterface,
  resetCounters,
};
