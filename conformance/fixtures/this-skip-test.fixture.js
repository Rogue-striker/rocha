const assert = require("node:assert");

describe("This Skip Test Suite", () => {
  it("skips conditionally with this.skip()", function () {
    this.skip();
    assert.fail("should not reach here");
  });

  it("runs normally after skip", () => {
    assert.strictEqual(2 + 2, 4);
  });
});
