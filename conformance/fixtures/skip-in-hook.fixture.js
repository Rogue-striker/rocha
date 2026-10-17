const assert = require("node:assert");

describe("Skip in Hook Suite", () => {
  before(function () {
    this.skip();
  });

  it("should be skipped by before hook", () => {
    assert.fail("should not run");
  });

  it("second test skipped by before hook", () => {
    assert.fail("should not run");
  });
});
