const assert = require("node:assert");

describe("Exception in Timer Suite", () => {
  it("catches asynchronous errors in done", (done) => {
    setTimeout(() => {
      done(new Error("async timer error"));
    }, 20);
  });
});
