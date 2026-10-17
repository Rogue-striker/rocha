describe("Custom Timeout Suite", () => {
  it("times out after custom 50ms", function (done) {
    this.timeout(50);
    setTimeout(() => {
      done();
    }, 150);
  });
});
