const assert = require("node:assert");

describe("Retries Exhausted Suite", function () {
  this.retries(2);
  let count = 0;

  it("always fails after retries", () => {
    count++;
    assert.fail(`Failing attempt ${count}`);
  });
});
