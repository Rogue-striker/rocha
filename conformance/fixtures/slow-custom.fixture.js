const assert = require("node:assert");

describe("Custom Slow Suite", () => {
  it("sets slow threshold", function () {
    this.slow(300);
    assert.strictEqual(this.slow(), 300);
  });
});
