import UserView from "../views/userView";
import UserModel from "../models/userModel";
import UserService from "../services/userService";

class UserController {
  constructor(view, model) {
    this.view = new UserView();
    this.model = new UserModel();
  }

  async userLogin() {
    const dataUser = await UserService.userLogin();
    this.view.handleLogin(dataUser);
  }

  async userSignUp() {
    this.view.handleSignUp();
  }
}

export default UserController;
