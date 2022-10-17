class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.logedIn = false;
  }

  login(id, password) {
    if (!this.logedIn) {
      return this.userClient.login(id, password).then((data) => {
        this.logedIn = true;
      });
    }
  }
}
module.exports = UserService;
