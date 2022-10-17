let ProductService = require("../product_service_no_di");
let ProductClient = require("../product_client");
jest.mock("../product_client"); // 1
// 흔하게 사용되나, Mock을 남용하는 Case

describe("ProductService", () => {
  // fetch와 같이 네트워크 환경에 영향받는 함수들은 이런식으로 한다.
  // 외부 상황에 영향 받지 않도록 하는게 포인트
  const fetchItems = jest.fn(async () => [
    // 2
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);

  ProductClient.mockImplementation(() => {
    // 3. 연결
    return {
      fetchItems: fetchItems,
    };
  });

  beforeEach(() => {
    ProductService = new ProductService();
    // <수동적으로 mock Clear하는 방법>
    // fetchItems.mockClear();
    // ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await ProductService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
