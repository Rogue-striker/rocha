const assert = require("node:assert");

describe("Disabled Timeout Suite", () => {
  it("disables timeout with this.timeout(0)", function (done) {
    this.timeout(0);
    setTimeout(() => {
      assert.strictEqual(1, 1);
      done();
    }, 40);
  });
});
