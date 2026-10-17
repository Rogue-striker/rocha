suite("Array TDD", function () {
  let arr;

  suiteSetup(function () {
    // suite setup
  });

  setup(function () {
    arr = [1, 2, 3];
  });

  test("indexOf", function () {
    if (arr.indexOf(2) !== 1) {
      throw new Error("unexpected index");
    }
  });

  test("length", function () {
    if (arr.length !== 3) {
      throw new Error("unexpected length");
    }
  });

  test.skip("skipped test", function () {
    throw new Error("should not run");
  });

  teardown(function () {
    arr = null;
  });

  suiteTeardown(function () {
    // suite teardown
  });
});
