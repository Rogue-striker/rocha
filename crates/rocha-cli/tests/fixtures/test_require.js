const assert = require("node:assert");
describe("--require flag", () => {
  it("loads CommonJS module prior to tests", () => {
    assert.strictEqual(globalThis.__require_loaded, "from_require");
  });
});
