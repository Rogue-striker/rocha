describe("Overspecified Suite", () => {
  it("declares done and returns promise", (done) => {
    return Promise.resolve(42);
  });
});
