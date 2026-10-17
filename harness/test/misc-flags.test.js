const test = require("node:test");
const assert = require("node:assert/strict");
const { Harness, Runner } = require("../src/index.js");

test("check-leaks: detects variable leaked onto globalThis", async () => {
  const harness = new Harness({ checkLeaks: true });
  const ctx = {};
  harness.install(ctx);

  ctx.describe("LeakSuite", () => {
    ctx.it("leaks a global variable", () => {
      globalThis.leakedVar123 = "bad";
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  // Clean up global
  delete globalThis.leakedVar123;

  assert.equal(result.stats.failures, 1);
  assert.ok(result.failures[0].err.message.includes("global leak(s) detected: 'leakedVar123'"));
});

test("check-leaks: allows variables specified in globals list or wildcard", async () => {
  const harness = new Harness({
    checkLeaks: true,
    globals: ["allowedVar", "appPrefix*"],
  });
  const ctx = {};
  harness.install(ctx);

  ctx.describe("AllowedGlobalsSuite", () => {
    ctx.it("creates allowed globals", () => {
      globalThis.allowedVar = "ok";
      globalThis.appPrefixSomething = 42;
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  // Clean up globals
  delete globalThis.allowedVar;
  delete globalThis.appPrefixSomething;

  assert.equal(result.stats.failures, 0);
  assert.equal(result.stats.passes, 1);
});

test("dry-run: reports tests as passing without executing bodies or hooks", async () => {
  const harness = new Harness({ dryRun: true });
  const ctx = {};
  harness.install(ctx);

  let hookExecuted = false;
  let testExecuted = false;

  ctx.describe("DryRunSuite", () => {
    ctx.before(() => {
      hookExecuted = true;
    });

    ctx.it("test 1", () => {
      testExecuted = true;
    });

    ctx.it("test 2", () => {
      testExecuted = true;
    });
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(hookExecuted, false, "hooks should not execute in dry-run");
  assert.equal(testExecuted, false, "test bodies should not execute in dry-run");
  assert.equal(result.stats.tests, 2);
  assert.equal(result.stats.passes, 2);
  assert.equal(result.stats.failures, 0);
  assert.equal(result.passes[0].duration, 0);
});

test("fail-zero: fails test run when zero tests are executed", async () => {
  const harness = new Harness({ failZero: true });
  const ctx = {};
  harness.install(ctx);

  ctx.describe("EmptySuite", () => {
    // No tests in this suite
  });

  const runner = new Runner(harness.options);
  const result = await runner.run(harness.rootSuite);

  assert.equal(result.stats.tests, 0);
  assert.equal(result.stats.failures, 1);
  assert.ok(result.failures[0].err.message.includes("No tests found"));
});
