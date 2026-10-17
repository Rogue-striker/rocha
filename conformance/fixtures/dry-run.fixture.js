describe("Dry Run Fixture", function () {
  before(function () {
    throw new Error("hook should not run in dry-run");
  });

  it("test 1", function () {
    throw new Error("test should not run in dry-run");
  });

  it("test 2", function () {
    throw new Error("test should not run in dry-run");
  });
});
