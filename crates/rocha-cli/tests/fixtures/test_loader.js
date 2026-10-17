const assert = require("node:assert");
describe("--loader flag", () => {
  it("registers custom loader in Node process", () => {
    assert(process.execArgv.some(arg => arg.includes("dummy_loader.mjs")));
  });
});
