import CartController from "./controllers/cartController";
import CartModel from "./models/cartModel";
import CartView from "./views/cartView";
import UserModel from "./models/userModel";
import UserController from "./controllers/loginController";
import UserView from "./views/userView";

window.addEventListener("load", () => {
  const render = new CartController(new CartView(), new CartModel());
  render.renderData();

  const loginUser = new UserController(new UserView(), new UserModel());
  loginUser.userLogin();
  loginUser.userSignUp();
});
