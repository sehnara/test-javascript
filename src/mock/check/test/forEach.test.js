const forEach = require("../forEach");

describe("forEach", () => {
  beforeEach(() => {
    mockCallback = jest.fn((x) => x + 42);
  });

  it("foreach", () => {
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
