import CartController from "./controllers/cartController";
import CartModel from "./models/cartModel";
import CartView from "./views/cartView";
import UserModel from "./models/userModel";
import UserController from "./controllers/loginController";
import UserView from "./views/userView";

window.addEventListener("load", () => {
  // display pages manager
  const managerCart = new CartController(new CartView(), new CartModel());
  managerCart.renderData();

  // display page login (user)
  const managerUser = new UserController(new UserView(), new UserModel());
  managerUser.userLogin();
  managerUser.userSignUp();
});
