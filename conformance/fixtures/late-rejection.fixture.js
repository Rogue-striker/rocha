const assert = require("node:assert");

describe("Late Rejection Suite", () => {
  it("handles rejected promise", async () => {
    await assert.rejects(async () => {
      throw new Error("intentional rejection");
    }, /intentional rejection/);
  });
});
