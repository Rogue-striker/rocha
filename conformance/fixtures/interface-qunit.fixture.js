suite("Math QUnit");

test("addition", function () {
  if (1 + 2 !== 3) {
    throw new Error("math failed");
  }
});

test.skip("pending test", function () {
  throw new Error("should not run");
});

suite("String QUnit");

test("concatenation", function () {
  if ("a" + "b" !== "ab") {
    throw new Error("concat failed");
  }
});
