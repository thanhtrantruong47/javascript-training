import { API } from "../constants/url";
import UserView from "../views/userView";
import UserModel from "../models/userModel";

class UserController {
  constructor (view, model) {
    this.view = new UserView();
    this.model = new UserModel();
  }

  async userLogin() {
    const res = await  fetch(`${API.BASE_URL}${API.USER}`);
    const dataUser = await res.json();
    this.view.handleLogin(dataUser)
  }
}

export default UserController;

const userController = new UserController();
userController.userLogin();