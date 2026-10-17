const assert = require("node:assert");
describe("--import flag", () => {
  it("imports ESM module prior to tests", () => {
    assert.strictEqual(globalThis.__import_loaded, "from_import");
  });
});
