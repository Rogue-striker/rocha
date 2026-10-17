const assert = require("node:assert");

describe("Outer Suite", () => {
  const trace = [];

  beforeEach(() => {
    trace.push("outer-beforeEach");
  });

  afterEach(() => {
    trace.push("outer-afterEach");
  });

  describe("Inner Suite", () => {
    beforeEach(() => {
      trace.push("inner-beforeEach");
    });

    afterEach(() => {
      trace.push("inner-afterEach");
    });

    it("verifies nested hook ordering", () => {
      assert.deepStrictEqual(trace, ["outer-beforeEach", "inner-beforeEach"]);
      trace.push("test");
    });
  });
});
