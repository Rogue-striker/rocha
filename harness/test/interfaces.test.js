const test = require("node:test");
const assert = require("node:assert/strict");
const { Harness, Runner } = require("../src/index.js");

test("TDD interface: basic suite and test execution", async () => {
  const harness = new Harness({ ui: "tdd" });
  const ctx = {};
  harness.install(ctx);

  ctx.suite("MathSuite", () => {
    ctx.test("add 1 + 1", () => {
      assert.equal(1 + 1, 2);
    });

    ctx.test("multiply 2 * 3", () => {
      assert.equal(2 * 3, 6);
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(result.stats.suites, 1);
  assert.equal(result.stats.tests, 2);
  assert.equal(result.stats.passes, 2);
  assert.equal(result.stats.failures, 0);
  assert.equal(result.passes[0].fullTitle, "MathSuite add 1 + 1");
  assert.equal(result.passes[1].fullTitle, "MathSuite multiply 2 * 3");
});

test("TDD interface: suiteSetup, setup, teardown, suiteTeardown lifecycle order", async () => {
  const harness = new Harness({ ui: "tdd" });
  const ctx = {};
  harness.install(ctx);

  const order = [];

  ctx.suite("LifecycleSuite", () => {
    ctx.suiteSetup(() => {
      order.push("suiteSetup");
    });

    ctx.suiteTeardown(() => {
      order.push("suiteTeardown");
    });

    ctx.setup(() => {
      order.push("setup");
    });

    ctx.teardown(() => {
      order.push("teardown");
    });

    ctx.test("test 1", () => {
      order.push("test1");
    });

    ctx.test("test 2", () => {
      order.push("test2");
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(result.stats.passes, 2);
  assert.deepEqual(order, [
    "suiteSetup",
    "setup",
    "test1",
    "teardown",
    "setup",
    "test2",
    "teardown",
    "suiteTeardown",
  ]);
});

test("TDD interface: test.only, test.skip, suite.skip, suite.only", async () => {
  const harness = new Harness({ ui: "tdd" });
  const ctx = {};
  harness.install(ctx);

  ctx.suite("FilteringSuite", () => {
    ctx.test.only("exclusive test", () => {
      assert.ok(true);
    });

    ctx.test("skipped test", () => {
      assert.fail("should not run");
    });

    ctx.test.skip("explicitly skipped", () => {
      assert.fail("should not run");
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(result.stats.passes, 1);
  assert.equal(result.passes[0].title, "exclusive test");
});

test("TDD interface: shared context (this) in hooks and tests", async () => {
  const harness = new Harness({ ui: "tdd" });
  const ctx = {};
  harness.install(ctx);

  ctx.suite("ContextSuite", () => {
    ctx.setup(function () {
      this.val = 42;
    });

    ctx.test("reads val", function () {
      assert.equal(this.val, 42);
      this.val = 100;
    });

    ctx.teardown(function () {
      assert.equal(this.val, 100);
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);
  assert.equal(result.stats.passes, 1);
  assert.equal(result.stats.failures, 0);
});

test("QUnit interface: declarative suite style with tests", async () => {
  const harness = new Harness({ ui: "qunit" });
  const ctx = {};
  harness.install(ctx);

  // Declarative style: suite without callback function
  ctx.suite("ArrayOperations");

  ctx.test("push item", () => {
    const arr = [];
    arr.push(1);
    assert.equal(arr.length, 1);
  });

  ctx.test("pop item", () => {
    const arr = [1, 2];
    assert.equal(arr.pop(), 2);
  });

  ctx.suite("StringOperations");

  ctx.test("toUpperCase", () => {
    assert.equal("abc".toUpperCase(), "ABC");
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(result.stats.suites, 2);
  assert.equal(result.stats.tests, 3);
  assert.equal(result.stats.passes, 3);
  assert.equal(result.passes[0].fullTitle, "ArrayOperations push item");
  assert.equal(result.passes[1].fullTitle, "ArrayOperations pop item");
  assert.equal(result.passes[2].fullTitle, "StringOperations toUpperCase");
});

test("QUnit interface: block suite style with before, beforeEach, afterEach, after", async () => {
  const harness = new Harness({ ui: "qunit" });
  const ctx = {};
  harness.install(ctx);

  const order = [];

  ctx.suite("BlockSuite", () => {
    ctx.before(() => order.push("before"));
    ctx.after(() => order.push("after"));
    ctx.beforeEach(() => order.push("beforeEach"));
    ctx.afterEach(() => order.push("afterEach"));

    ctx.test("qtest 1", () => order.push("test1"));
    ctx.test("qtest 2", () => order.push("test2"));
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(result.stats.passes, 2);
  assert.deepEqual(order, [
    "before",
    "beforeEach",
    "test1",
    "afterEach",
    "beforeEach",
    "test2",
    "afterEach",
    "after",
  ]);
});

test("QUnit interface: setup and teardown aliases", async () => {
  const harness = new Harness({ ui: "qunit" });
  const ctx = {};
  harness.install(ctx);

  let setupRan = false;
  let teardownRan = false;

  ctx.suite("AliasesSuite", () => {
    ctx.setup(() => {
      setupRan = true;
    });

    ctx.teardown(() => {
      teardownRan = true;
    });

    ctx.test("check aliases", () => {
      assert.ok(setupRan);
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(result.stats.passes, 1);
  assert.ok(teardownRan);
});

test("Harness: throws on unsupported interface", () => {
  const harness = new Harness({ ui: "unknown-ui" });
  assert.throws(
    () => {
      harness.install({});
    },
    /Unsupported interface: "unknown-ui"/
  );
});
