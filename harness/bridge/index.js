#!/usr/bin/env node
'use strict';

const EventEmitter = require('events');
const readline = require('readline');
const path = require('path');
const fs = require('fs');

// Ensure Mocha's Base reporter can be called with Base.call(this, runner) by older third-party reporters like mocha-junit-reporter
try {
  const mocha = require('mocha');
  if (mocha && mocha.reporters && mocha.reporters.Base) {
    const OriginalBase = mocha.reporters.Base;
    function CallableBase(runner, options) {
      const instance = Reflect.construct(OriginalBase, [runner, options], new.target || CallableBase);
      Object.assign(this, instance);
      return this;
    }
    CallableBase.prototype = OriginalBase.prototype;
    Object.setPrototypeOf(CallableBase, OriginalBase);
    Object.assign(CallableBase, OriginalBase);
    mocha.reporters.Base = CallableBase;
  }
} catch (e) {}

// CLI Argument parsing
const args = process.argv.slice(2);
let reporterName = 'spec';
let reporterOptions = {};

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--reporter' && i + 1 < args.length) {
    reporterName = args[++i];
  } else if (args[i] === '--reporter-option' && i + 1 < args.length) {
    const optStr = args[++i];
    // Can be key=val or JSON
    if (optStr.startsWith('{')) {
      try {
        Object.assign(reporterOptions, JSON.parse(optStr));
      } catch (e) {}
    } else {
      const idx = optStr.indexOf('=');
      if (idx !== -1) {
        const k = optStr.slice(0, idx).trim();
        const v = optStr.slice(idx + 1).trim();
        reporterOptions[k] = v;
      }
    }
  }
}

// Minimal Mocha Suite class
class Suite {
  constructor(title, parent = null, file = '') {
    this.title = title || '';
    this.parent = parent;
    this.file = file || (parent ? parent.file : '');
    this.root = !parent;
    this.suites = [];
    this.tests = [null]; // Placeholder to prevent premature invalidSuite pruning
    this._hasRealTests = false;
    this._beforeAll = [];
    this._afterAll = [];
    this._beforeEach = [];
    this._afterEach = [];
    if (parent) {
      parent.suites.push(this);
    }
  }

  addRealTest(test) {
    if (!this._hasRealTests) {
      this.tests = [];
      this._hasRealTests = true;
    }
    this.tests.push(test);
  }

  finalizeTests() {
    if (!this._hasRealTests) {
      this.tests = [];
    }
  }

  fullTitle() {
    if (!this.parent || !this.parent.title) {
      return this.title;
    }
    const parentTitle = this.parent.fullTitle();
    return parentTitle ? `${parentTitle} ${this.title}` : this.title;
  }

  titlePath() {
    const result = [];
    if (this.parent) {
      result.push(...this.parent.titlePath());
    }
    if (this.title) {
      result.push(this.title);
    }
    return result;
  }

  slow(ms) {
    if (arguments.length === 0) return this._slow !== undefined ? this._slow : 75;
    this._slow = Number(ms);
    return this;
  }

  timeout(ms) {
    if (arguments.length === 0) return this._timeout !== undefined ? this._timeout : 2000;
    this._timeout = Number(ms);
    return this;
  }

  isPending() {
    return false;
  }
}

// Minimal Mocha Test class
class Test {
  constructor(title, suite, file = '') {
    this.title = title || '';
    this.suite = suite;
    this.parent = suite;
    this.file = file || (suite ? suite.file : '');
    this.duration = 0;
    this.state = 'passed';
    this.speed = 'fast';
    this.err = null;
    this._currentRetry = 0;
    this.pending = false;
  }

  fullTitle() {
    if (!this.suite || !this.suite.title) {
      return this.title;
    }
    const parentTitle = this.suite.fullTitle();
    return parentTitle ? `${parentTitle} ${this.title}` : this.title;
  }

  titlePath() {
    const result = this.suite ? this.suite.titlePath() : [];
    result.push(this.title);
    return result;
  }

  currentRetry() {
    return this._currentRetry;
  }

  slow(ms) {
    if (arguments.length === 0) return this._slow !== undefined ? this._slow : 75;
    this._slow = Number(ms);
    return this;
  }

  timeout(ms) {
    if (arguments.length === 0) return this._timeout !== undefined ? this._timeout : 2000;
    this._timeout = Number(ms);
    return this;
  }

  isPending() {
    return this.pending;
  }
}

// Fake Mocha Runner
class FakeRunner extends EventEmitter {
  constructor() {
    super();
    this.stats = {
      suites: 0,
      tests: 0,
      passes: 0,
      pending: 0,
      failures: 0,
      start: new Date(),
      end: null,
      duration: 0,
    };
    this.total = 0;
    this.failures = [];
    this.currentRunnable = null;
  }
}

FakeRunner.constants = {
  EVENT_RUN_BEGIN: 'start',
  EVENT_RUN_END: 'end',
  EVENT_SUITE_BEGIN: 'suite',
  EVENT_SUITE_END: 'suite end',
  EVENT_TEST_BEGIN: 'test',
  EVENT_TEST_END: 'test end',
  EVENT_TEST_PASS: 'pass',
  EVENT_TEST_FAIL: 'fail',
  EVENT_TEST_PENDING: 'pending',
};

const runner = new FakeRunner();

// Load Reporter
let ReporterClass;
try {
  if (reporterName.startsWith('.') || path.isAbsolute(reporterName)) {
    ReporterClass = require(path.resolve(process.cwd(), reporterName));
  } else {
    // Try mocha built-in or module
    try {
      ReporterClass = require(reporterName);
    } catch (e1) {
      try {
        const mocha = require('mocha');
        ReporterClass = mocha.reporters[reporterName] || mocha.reporters[reporterName.charAt(0).toUpperCase() + reporterName.slice(1)];
      } catch (e2) {
        throw e1;
      }
    }
  }
} catch (err) {
  console.error(`[rocha bridge] Failed to load reporter "${reporterName}":`, err.message);
  process.exit(1);
}

if (typeof ReporterClass !== 'function' && typeof ReporterClass.default === 'function') {
  ReporterClass = ReporterClass.default;
}

const reporterInstance = new ReporterClass(runner, {
  reporterOptions,
  reporterOption: reporterOptions,
});

// Event registry
const rootSuite = new Suite('');
rootSuite.suites.push(null); // Satisfy isInvalidSuite check

const suitesMap = new Map();
const testsMap = new Map();
let hasStarted = false;
let hasEnded = false;

function ensureStart() {
  if (!hasStarted) {
    hasStarted = true;
    runner.emit('start');
    rootSuite.finalizeTests();
    runner.emit('suite', rootSuite);
    rootSuite.suites = rootSuite.suites.filter(Boolean);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  if (!line || !line.trim()) return;
  let msg;
  try {
    msg = JSON.parse(line);
  } catch (e) {
    return;
  }

  ensureStart();

  const type = msg.type || Object.keys(msg)[0];
  const payload = msg.type ? msg : msg[type];

  switch (type) {
    case 'SuiteStart': {
      const parentSuite = payload.parent ? suitesMap.get(payload.parent) || rootSuite : rootSuite;
      const suite = new Suite(payload.title, parentSuite, payload.file);
      suitesMap.set(payload.id, suite);
      parentSuite.suites.push(suite);
      runner.stats.suites++;
      runner.emit('suite', suite);
      break;
    }
    case 'SuiteEnd': {
      const suite = suitesMap.get(payload.id) || rootSuite;
      suite.finalizeTests();
      if (reporterInstance && reporterInstance._testsuites && reporterInstance._testsuites.length > 0) {
        const last = reporterInstance._testsuites[reporterInstance._testsuites.length - 1];
        if (last && last.testsuite && last.testsuite[0] && last.testsuite[0]._attr) {
          last.testsuite[0]._attr.tests = suite.tests.length;
        }
      }
      runner.emit('suite end', suite);
      break;
    }
    case 'TestStart': {
      const parentSuite = suitesMap.get(payload.suite) || rootSuite;
      const test = new Test(payload.title, parentSuite, payload.file);
      testsMap.set(payload.id, test);
      parentSuite.addRealTest(test);
      runner.total++;
      runner.stats.tests++;
      runner.currentRunnable = test;
      runner.emit('test', test);
      break;
    }
    case 'TestPass': {
      const test = testsMap.get(payload.id);
      if (test) {
        test.duration = payload.duration_ms || 0;
        test.state = 'passed';
        test.speed = payload.slow ? 'slow' : (test.duration >= 75 ? 'slow' : test.duration >= 38 ? 'medium' : 'fast');
        runner.stats.passes++;
        runner.emit('pass', test);
        runner.emit('test end', test);
      }
      break;
    }
    case 'TestFail': {
      const test = testsMap.get(payload.id);
      if (test) {
        test.duration = payload.duration_ms || 0;
        test.state = 'failed';
        const err = new Error(payload.error ? payload.error.message : 'Test failed');
        if (payload.error) {
          err.name = payload.error.name || 'Error';
          if (payload.error.stack) err.stack = payload.error.stack;
          if (payload.error.code) err.code = payload.error.code;
          if (payload.error.actual) err.actual = payload.error.actual;
          if (payload.error.expected) err.expected = payload.error.expected;
          if (payload.error.operator) err.operator = payload.error.operator;
          err.showDiff = Boolean(payload.error.show_diff);
        }
        test.err = err;
        runner.stats.failures++;
        runner.failures.push(test);
        runner.emit('fail', test, err);
        runner.emit('test end', test);
      }
      break;
    }
    case 'TestPending': {
      const test = testsMap.get(payload.id);
      if (test) {
        test.pending = true;
        test.state = 'pending';
        runner.stats.pending++;
        runner.emit('pending', test);
        runner.emit('test end', test);
      }
      break;
    }
    case 'Finish': {
      if (payload.summary) {
        runner.stats.passes = payload.summary.passes;
        runner.stats.failures = payload.summary.failures;
        runner.stats.pending = payload.summary.pending;
        runner.stats.duration = payload.summary.duration_ms;
      }
      runner.stats.end = new Date();
      if (!hasEnded) {
        hasEnded = true;
        runner.emit('end');
      }

      // If reporter defines done(), call it
      if (typeof reporterInstance.done === 'function') {
        reporterInstance.done(runner.failures.length, () => {
          process.exit(0);
        });
      } else {
        setTimeout(() => process.exit(0), 50);
      }
      break;
    }
    default:
      break;
  }
});

rl.on('close', () => {
  if (hasStarted && !hasEnded) {
    hasEnded = true;
    runner.stats.end = new Date();
    runner.emit('end');
  }
});
