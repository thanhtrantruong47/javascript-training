import { API } from "../constants/url";
import CartModel from "../models/cartModel";
import CartView from "../views/cartView";

class CartController {
  constructor (view, model) {
    this.view = new CartView();
    this.model = model
  }

  async renderData() {
    const res = await  fetch(`${API.BASE_URL}${API.CART}`);
    const cartData = await res.json();
    this.view.renderTable(cartData);
  }
}

export default CartController;

