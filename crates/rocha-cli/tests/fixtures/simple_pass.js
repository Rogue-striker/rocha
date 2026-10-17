const assert = require("node:assert");
describe("simple test suite", () => {
  it("passes simple assertion", () => {
    assert.strictEqual(1 + 1, 2);
  });
});
