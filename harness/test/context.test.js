"use strict";

const test = require("node:test");
const assert = require("node:assert");
const { Context, PendingError, executeRunnable } = require("../src/context.js");

test("context: timeout getter and setter", () => {
  const ctx = new Context();
  assert.strictEqual(ctx.timeout(), 2000);
  ctx.timeout(500);
  assert.strictEqual(ctx.timeout(), 500);
});

test("context: slow getter and setter", () => {
  const ctx = new Context();
  assert.strictEqual(ctx.slow(), 75);
  ctx.slow(150);
  assert.strictEqual(ctx.slow(), 150);
});

test("context: retries getter and setter", () => {
  const ctx = new Context();
  assert.strictEqual(ctx.retries(), 0);
  ctx.retries(3);
  assert.strictEqual(ctx.retries(), 3);
});

test("context: skip throws PendingError", () => {
  const ctx = new Context();
  assert.throws(
    () => ctx.skip(),
    (err) => err instanceof PendingError && err.isPending === true
  );
});

test("executeRunnable: detects overspecified test returning Promise and declaring done", async () => {
  const ctx = new Context();
  await assert.rejects(
    async () => {
      await executeRunnable((done) => {
        return Promise.resolve("done and promise");
      }, ctx, 500);
    },
    (err) => {
      return err.code === "ERR_MOCHA_OVER_SPECIFIED_TEST";
    }
  );
});

test("executeRunnable: detects double done callback invocation via onMultipleDone", async () => {
  const ctx = new Context();
  ctx.test = { fullTitle: () => "test double done", file: "test.js" };
  let reportedErr = null;
  ctx.onMultipleDone = (err) => {
    reportedErr = err;
  };
  
  await executeRunnable((done) => {
    done();
    done();
  }, ctx, 500);

  assert(reportedErr !== null, "onMultipleDone should be invoked");
  assert.strictEqual(reportedErr.code, "ERR_MOCHA_MULTIPLE_DONE");
});

test("executeRunnable: timeout of 0 disables timeout", async () => {
  const ctx = new Context();
  ctx.timeout(0);
  let resolved = false;
  await executeRunnable(async () => {
    await new Promise(r => setTimeout(r, 50));
    resolved = true;
  }, ctx, 0);
  assert.strictEqual(resolved, true);
});

test("executeRunnable: times out if neither done called nor promise returned", async () => {
  const ctx = new Context();
  await assert.rejects(
    async () => {
      await executeRunnable((done) => {
        // do not call done
      }, ctx, 30);
    },
    (err) => {
      return err.code === "ERR_MOCHA_TIMEOUT";
    }
  );
});
