"use strict";

const test = require("node:test");
const assert = require("node:assert");
const { Suite, Test, Hook } = require("../src/interface-bdd.js");
const { collectBeforeEachHooks, collectAfterEachHooks, runRunnable, applyMochaHooks } = require("../src/hooks.js");

test("hooks: collectBeforeEachHooks traverses outer to inner in definition order", () => {
  const root = new Suite("root");
  const outer = root.addSuite(new Suite("outer"));
  const inner = outer.addSuite(new Suite("inner"));
  const t = inner.addTest(new Test("test 1", () => {}));

  root.addBeforeEach(() => {}, "root beforeEach 1");
  root.addBeforeEach(() => {}, "root beforeEach 2");
  outer.addBeforeEach(() => {}, "outer beforeEach");
  inner.addBeforeEach(() => {}, "inner beforeEach");

  const hooks = collectBeforeEachHooks(t);
  const titles = hooks.map(h => h.title);
  assert.deepStrictEqual(titles, [
    "root beforeEach 1",
    "root beforeEach 2",
    "outer beforeEach",
    "inner beforeEach",
  ]);
});

test("hooks: collectAfterEachHooks traverses inner to outer in definition order", () => {
  const root = new Suite("root");
  const outer = root.addSuite(new Suite("outer"));
  const inner = outer.addSuite(new Suite("inner"));
  const t = inner.addTest(new Test("test 1", () => {}));

  root.addAfterEach(() => {}, "root afterEach 1");
  root.addAfterEach(() => {}, "root afterEach 2");
  outer.addAfterEach(() => {}, "outer afterEach");
  inner.addAfterEach(() => {}, "inner afterEach 1");
  inner.addAfterEach(() => {}, "inner afterEach 2");

  const hooks = collectAfterEachHooks(t);
  const titles = hooks.map(h => h.title);
  assert.deepStrictEqual(titles, [
    "inner afterEach 1",
    "inner afterEach 2",
    "outer afterEach",
    "root afterEach 1",
    "root afterEach 2",
  ]);
});

test("hooks: runRunnable supports synchronous function and context", async () => {
  const ctx = { val: 10 };
  let executed = false;
  await runRunnable(function() {
    assert.strictEqual(this.val, 10);
    executed = true;
  }, ctx, 100);
  assert.strictEqual(executed, true);
});

test("hooks: runRunnable supports async Promise function", async () => {
  let executed = false;
  await runRunnable(async () => {
    await new Promise(r => setTimeout(r, 10));
    executed = true;
  }, {}, 200);
  assert.strictEqual(executed, true);
});

test("hooks: runRunnable supports done callback", async () => {
  let executed = false;
  await runRunnable((done) => {
    setTimeout(() => {
      executed = true;
      done();
    }, 10);
  }, {}, 200);
  assert.strictEqual(executed, true);
});

test("hooks: runRunnable times out if execution exceeds timeoutMs", async () => {
  await assert.rejects(
    async () => {
      await runRunnable((done) => {
        // never call done
      }, {}, 30);
    },
    { message: "Timeout of 30ms exceeded." }
  );
});

test("hooks: applyMochaHooks attaches hooks to rootSuite", async () => {
  const root = new Suite("root");
  await applyMochaHooks(root, {
    beforeAll: [() => {}],
    beforeEach: () => {},
    afterEach: [() => {}, () => {}],
    afterAll: () => {},
  });

  assert.strictEqual(root._beforeAll.length, 1);
  assert.strictEqual(root._beforeEach.length, 1);
  assert.strictEqual(root._afterEach.length, 2);
  assert.strictEqual(root._afterAll.length, 1);
});
