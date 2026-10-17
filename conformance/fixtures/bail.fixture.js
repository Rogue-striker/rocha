"use strict";

const assert = require("node:assert");

describe("Bail Suite", function() {
  this.bail(true);

  it("test 1 passes", () => {
    assert.strictEqual(1, 1);
  });

  it("test 2 fails", () => {
    assert.fail("intentional failure for bail");
  });

  it("test 3 should be skipped due to bail", () => {
    assert.strictEqual(2, 2);
  });
});
