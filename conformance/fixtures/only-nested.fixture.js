const assert = require("node:assert");

describe.only("Exclusive Suite", () => {
  it("runs test 1 in only suite", () => {
    assert.strictEqual(1, 1);
  });

  it("runs test 2 in only suite", () => {
    assert.strictEqual(2, 2);
  });
});

describe("Ignored Suite", () => {
  it("should be skipped", () => {
    assert.fail("should not run");
  });
});
