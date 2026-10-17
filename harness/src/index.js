'use strict';

const path = require('node:path');
const { Suite, Test, Hook, createBddInterface, resetCounters } = require('./interface-bdd.js');

class Harness {
  constructor(options = {}) {
    this.options = {
      ui: options.ui || 'bdd',
      delay: options.delay || false,
      timeout: options.timeout !== undefined ? options.timeout : 2000,
      slow: options.slow !== undefined ? options.slow : 75,
      retries: options.retries || 0,
      file: options.file || '',
    };
    this.rootSuite = new Suite('', null, this.options.file);
    this.rootSuite.timeout = this.options.timeout;
    this.rootSuite.slow = this.options.slow;
    this.rootSuite.retries = this.options.retries;
    this.rootSuite.delayed = this.options.delay;
    this.isRunCalled = false;
  }

  install(targetContext = globalThis) {
    if (this.options.ui === 'bdd') {
      createBddInterface(targetContext, this.rootSuite, this.options);
    }

    if (this.options.delay) {
      targetContext.run = () => {
        this.isRunCalled = true;
      };
    }

    return this.rootSuite;
  }

  loadFile(filePath, targetContext = globalThis) {
    const absPath = path.resolve(filePath);
    this.options.file = absPath;
    this.rootSuite.file = absPath;
    this.install(targetContext);

    // Require the test file to populate the suite tree
    require(absPath);

    return this.rootSuite;
  }
}

function buildSuiteTree(fn, options = {}) {
  const harness = new Harness(options);
  const context = {};
  harness.install(context);
  fn(context);
  return harness.rootSuite;
}

module.exports = {
  Harness,
  Suite,
  Test,
  Hook,
  createBddInterface,
  buildSuiteTree,
  resetCounters,
};
