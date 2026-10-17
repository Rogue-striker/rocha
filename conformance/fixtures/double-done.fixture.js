const assert = require("node:assert");

describe("Double Done Suite", () => {
  it("calls done multiple times", (done) => {
    done();
    try {
      done();
    } catch (_) {}
  });
});
