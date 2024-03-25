import CartModel from "../models/cartModel";
import CartView from "../views/cartView";
import cartService from "../services/cartService";

class CartController {
  constructor(view, model) {
    this.view = new CartView();
    this.model = model;
  }

  async renderData() {
    const cartData = await cartService.getCart();
    this.view.renderTable(cartData);
  }
}

export default CartController;
