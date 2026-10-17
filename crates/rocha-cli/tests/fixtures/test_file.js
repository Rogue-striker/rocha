const assert = require("node:assert");
describe("--file flag", () => {
  it("runs setup file before test file", () => {
    assert.strictEqual(globalThis.__setup_file_ran, true);
  });
});
