import CartModel from "../models/cartModel";
import CartView from "../views/cartView";
import CartService from "../services/cartService";

class CartController {
  constructor(view, model) {
    this.view = new CartView();
    this.model = model;
  }

  //render data for table from json-server
  async renderData() {
    const cartData = await CartService.getCart();
    this.view.renderTable(cartData);
  }
}

export default CartController;
