"use strict";

const test = require("node:test");
const assert = require("node:assert");
const { buildSuiteTree, Runner } = require("../src/index.js");

test("runner: executes suites and tests depth-first", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it }) => {
    describe("Suite 1", () => {
      it("1.1", () => trace.push("1.1"));
      describe("Suite 1.Sub", () => {
        it("1.Sub.1", () => trace.push("1.Sub.1"));
      });
      it("1.2", () => trace.push("1.2"));
    });
    describe("Suite 2", () => {
      it("2.1", () => trace.push("2.1"));
    });
  });

  const runner = new Runner();
  await runner.run(root);

  assert.deepStrictEqual(trace, ["1.1", "1.2", "1.Sub.1", "2.1"]);
});

test("runner: hook execution order matches Mocha semantics", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it, before, after, beforeEach, afterEach }) => {
    describe("Outer", () => {
      before(() => trace.push("outer-before"));
      after(() => trace.push("outer-after"));
      beforeEach(() => trace.push("outer-beforeEach"));
      afterEach(() => trace.push("outer-afterEach"));

      describe("Inner", () => {
        before(() => trace.push("inner-before"));
        after(() => trace.push("inner-after"));
        beforeEach(() => trace.push("inner-beforeEach"));
        afterEach(() => trace.push("inner-afterEach"));

        it("test A", () => trace.push("test A"));
        it("test B", () => trace.push("test B"));
      });
    });
  });

  const runner = new Runner();
  const res = await runner.run(root);

  assert.deepStrictEqual(trace, [
    "outer-before",
    "inner-before",
    // test A
    "outer-beforeEach",
    "inner-beforeEach",
    "test A",
    "inner-afterEach",
    "outer-afterEach",
    // test B
    "outer-beforeEach",
    "inner-beforeEach",
    "test B",
    "inner-afterEach",
    "outer-afterEach",
    "inner-after",
    "outer-after",
  ]);
  assert.strictEqual(res.stats.passes, 2);
  assert.strictEqual(res.stats.failures, 0);
});

test("runner: before failure skips suite tests and runs after", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it, before, after }) => {
    describe("Suite with bad before", () => {
      before(() => {
        trace.push("before");
        throw new Error("before boom");
      });
      after(() => {
        trace.push("after");
      });
      it("should not run", () => {
        trace.push("test");
      });
      describe("Child Suite", () => {
        it("child test should not run", () => {
          trace.push("child-test");
        });
      });
    });
  });

  const runner = new Runner();
  const res = await runner.run(root);

  assert.deepStrictEqual(trace, ["before", "after"]);
  assert.strictEqual(res.stats.failures, 1);
  assert.strictEqual(res.stats.passes, 0);
});

test("runner: beforeEach failure skips test body, runs afterEach, and aborts suite tests", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it, beforeEach, afterEach }) => {
    describe("Suite", () => {
      beforeEach(() => {
        trace.push("beforeEach");
        throw new Error("beforeEach boom");
      });
      afterEach(() => {
        trace.push("afterEach");
      });
      it("test 1", () => {
        trace.push("test 1");
      });
      it("test 2", () => {
        trace.push("test 2");
      });
    });
  });

  const runner = new Runner();
  const res = await runner.run(root);

  assert.deepStrictEqual(trace, ["beforeEach", "afterEach"]);
  assert.strictEqual(res.stats.failures, 1);
  assert.strictEqual(res.stats.passes, 0);
});

test("runner: afterEach failure aborts remaining tests in suite", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it, afterEach }) => {
    describe("Suite", () => {
      afterEach(() => {
        trace.push("afterEach");
        throw new Error("afterEach boom");
      });
      it("test 1", () => {
        trace.push("test 1");
      });
      it("test 2", () => {
        trace.push("test 2");
      });
    });
  });

  const runner = new Runner();
  const res = await runner.run(root);

  assert.deepStrictEqual(trace, ["test 1", "afterEach"]);
  assert.strictEqual(res.stats.failures, 1);
  assert.strictEqual(res.stats.passes, 0);
});

test("runner: it.only filters out other tests", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it }) => {
    describe("Suite 1", () => {
      it("test 1", () => trace.push("test 1"));
      it.only("test 2 (only)", () => trace.push("test 2"));
    });
    describe("Suite 2", () => {
      it("test 3", () => trace.push("test 3"));
    });
  });

  const runner = new Runner();
  const res = await runner.run(root);

  assert.deepStrictEqual(trace, ["test 2"]);
  assert.strictEqual(res.stats.passes, 1);
  assert.strictEqual(res.stats.tests, 1);
});

test("runner: describe.only runs only tests in that suite", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it }) => {
    describe.only("Suite 1", () => {
      it("test 1", () => trace.push("test 1"));
      it("test 2", () => trace.push("test 2"));
    });
    describe("Suite 2", () => {
      it("test 3", () => trace.push("test 3"));
    });
  });

  const runner = new Runner();
  const res = await runner.run(root);

  assert.deepStrictEqual(trace, ["test 1", "test 2"]);
  assert.strictEqual(res.stats.passes, 2);
});

test("runner: --grep, --fgrep, and --invert filtering", async () => {
  const root = buildSuiteTree(({ describe, it }) => {
    describe("Suite", () => {
      it("alpha one", () => {});
      it("beta two", () => {});
      it("gamma three", () => {});
    });
  });

  // grep
  const r1 = new Runner({ grep: "alpha|gamma" });
  const res1 = await r1.run(root);
  assert.strictEqual(res1.stats.passes, 2);

  // fgrep
  const r2 = new Runner({ fgrep: "beta" });
  const res2 = await r2.run(root);
  assert.strictEqual(res2.stats.passes, 1);

  // invert
  const r3 = new Runner({ fgrep: "beta", invert: true });
  const res3 = await r3.run(root);
  assert.strictEqual(res3.stats.passes, 2);
});

test("runner: --bail halts execution immediately on failure", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it }) => {
    describe("Suite", () => {
      it("test 1", () => {
        trace.push("test 1");
        throw new Error("fail 1");
      });
      it("test 2", () => {
        trace.push("test 2");
      });
    });
    describe("Suite 2", () => {
      it("test 3", () => {
        trace.push("test 3");
      });
    });
  });

  const runner = new Runner({ bail: true });
  const res = await runner.run(root);

  assert.deepStrictEqual(trace, ["test 1"]);
  assert.strictEqual(res.stats.failures, 1);
  assert.strictEqual(res.stats.tests, 1);
});

test("runner: --forbid-only throws error if .only is present", async () => {
  const root = buildSuiteTree(({ describe, it }) => {
    describe("Suite", () => {
      it.only("exclusive test", () => {});
    });
  });

  const runner = new Runner({ forbidOnly: true });
  await assert.rejects(
    async () => {
      await runner.run(root);
    },
    (err) => {
      return err.code === "ERR_MOCHA_FORBIDDEN_EXCLUSIVITY";
    }
  );
});

test("runner: --forbid-pending marks pending tests as failures", async () => {
  const root = buildSuiteTree(({ describe, it }) => {
    describe("Suite", () => {
      it.skip("skipped test", () => {});
      it("passing test", () => {});
    });
  });

  const runner = new Runner({ forbidPending: true });
  const res = await runner.run(root);

  assert.strictEqual(res.stats.failures, 1);
  assert.strictEqual(res.stats.passes, 1);
  assert.strictEqual(res.failures[0].err.message, "Pending test forbidden");
});

test("runner: context (this) is shared between beforeEach, it, and afterEach", async () => {
  const trace = [];
  const root = buildSuiteTree(({ describe, it, beforeEach, afterEach }) => {
    describe("Context Suite", () => {
      beforeEach(function() {
        this.userId = 42;
      });
      it("accesses context in test", function() {
        trace.push(this.userId);
        this.token = "xyz";
      });
      afterEach(function() {
        trace.push(this.token);
      });
    });
  });

  const runner = new Runner();
  await runner.run(root);

  assert.deepStrictEqual(trace, [42, "xyz"]);
});
