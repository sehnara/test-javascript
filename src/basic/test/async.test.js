const fetchProduct = require("../../async");

// 수동으로 done()함수를 발동하면 그 때 test 끝남
describe("ASYNC", () => {
  it("async-done", (done) => {
    fetchProduct().then((res) => {
      expect(res).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async-return", () => {
    return fetchProduct().then((res) => {
      expect(res).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async-reject", () => {
    expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
