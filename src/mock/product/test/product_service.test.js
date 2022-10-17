let ProductService = require("../product_service");
let StubProductClient = require("./stub_product_client");

describe("ProductService - Stub", () => {
  beforeEach(() => {
    ProductService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await ProductService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
