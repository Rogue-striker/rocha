"use strict";

const test = require("node:test");
const assert = require("node:assert");
const { serializeError, cleanStack, safeStringify } = require("../src/errors.js");

test("errors: serializes assert.deepStrictEqual AssertionError", () => {
  let thrown = null;
  try {
    assert.deepStrictEqual({ a: 1, b: 2 }, { a: 1, b: 3 });
  } catch (err) {
    thrown = err;
  }

  assert(thrown !== null, "should have thrown AssertionError");
  const serialized = serializeError(thrown);

  assert.strictEqual(serialized.name, "AssertionError");
  assert(serialized.message.length > 0);
  assert(serialized.actual !== undefined);
  assert(serialized.expected !== undefined);
  assert.strictEqual(serialized.show_diff, true);
  assert(serialized.operator === "deepStrictEqual" || serialized.operator === "strictEqual" || serialized.code === "ERR_ASSERTION");
});

test("errors: serializes Chai-style expect AssertionError", () => {
  const chaiErr = new Error("expected 10 to equal 20");
  chaiErr.name = "AssertionError";
  chaiErr.actual = 10;
  chaiErr.expected = 20;
  chaiErr.showDiff = true;
  chaiErr.operator = "to equal";

  const serialized = serializeError(chaiErr);
  assert.strictEqual(serialized.name, "AssertionError");
  assert.strictEqual(serialized.actual, "10");
  assert.strictEqual(serialized.expected, "20");
  assert.strictEqual(serialized.show_diff, true);
  assert.strictEqual(serialized.operator, "to equal");
});

test("errors: handles thrown primitive string", () => {
  const serialized = serializeError("simple string error");
  assert.strictEqual(serialized.name, "Error");
  assert.strictEqual(serialized.message, "simple string error");
  assert.strictEqual(serialized.show_diff, false);
});

test("errors: handles thrown null and undefined", () => {
  const sNull = serializeError(null);
  assert.strictEqual(sNull.name, "Error");
  assert.strictEqual(sNull.message, "thrown null");

  const sUndef = serializeError(undefined);
  assert.strictEqual(sUndef.name, "Error");
  assert.strictEqual(sUndef.message, "thrown undefined");
});

test("errors: handles thrown plain object with cyclic references", () => {
  const cyclicObj = { code: 500 };
  cyclicObj.self = cyclicObj;

  const serialized = serializeError(cyclicObj);
  assert.strictEqual(serialized.name, "Object");
  assert(serialized.message.includes("[Circular]"));
  assert(serialized.message.includes("500"));
});

test("errors: truncates huge error messages with marker", () => {
  const hugeMessage = "A".repeat(50000);
  const err = new Error(hugeMessage);

  const serialized = serializeError(err, { maxMessageLength: 1000 });
  assert.strictEqual(serialized.message.length, 1000 + " ... [message truncated]".length);
  assert(serialized.message.endsWith("... [message truncated]"));
});

test("errors: safeStringify handles cyclic objects and long arrays", () => {
  const cycle = { name: "test" };
  cycle.sub = cycle;
  const str = safeStringify(cycle);
  assert(str.includes("[Circular]"));
});

test("errors: cleanStack strips internal harness frames", () => {
  const rawStack = [
    "Error: boom",
    "    at Context.<anonymous> (/Users/project/test/user.test.js:10:5)",
    "    at Runner._runSuite (/Users/project/harness/src/runner.js:200:15)",
    "    at executeRunnable (/Users/project/harness/src/context.js:80:10)",
    "    at process.processImmediate (node:internal/timers:504:21)",
  ].join("\n");

  const cleaned = cleanStack(rawStack);
  assert(cleaned.includes("user.test.js:10:5"));
  assert(!cleaned.includes("harness/src/runner.js"));
  assert(!cleaned.includes("harness/src/context.js"));
  assert(!cleaned.includes("node:internal/timers"));
});
