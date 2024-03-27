import UserView from "../views/userView";
import UserModel from "../models/userModel";
import UserService from "../services/userService";

class UserController {
  constructor(view, model) {
    this.view = new UserView();
    this.model = new UserModel();
  }

  async userLogin() {
    const dataUser = await UserService.getUser();
    this.view.handleLogin(dataUser);
  }

  async userSignUp() {
    const dataUser = await UserService.getUser();
    this.view.handleSignUp(dataUser);
  }

  async renderUser() {
    const dataUser = await UserService.getUser();
    this.view.renderUser(dataUser);
  }
}

export default UserController;
