const assert = require("node:assert");
describe("--node-option flag", () => {
  it("passes options to Node process", () => {
    assert(process.execArgv.includes("--trace-warnings"));
  });
});
