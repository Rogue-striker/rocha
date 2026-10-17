describe("Check Leaks Fixture", function () {
  it("leaks an unallowed global variable", function () {
    globalThis.conformanceLeakedVar = 1;
  });
});
