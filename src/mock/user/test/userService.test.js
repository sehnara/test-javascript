const UserClient = require("../user_client");
const UserService = require("../user_service");

jest.mock("../user_client");

describe("userService", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return { login };
  });

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("aaa", "aaa");
    expect(login.mock.calls.length).toBe(1);
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("aaa", "aaa");
    await userService.login("aaa", "aaa");
    expect(login.mock.calls.length).toBe(1);
  });
});
