import CartService from "../services/cartService";

class CartView {
  constructor() {
    this.cartTable = document.querySelector(".mytable");
  }

  //function create layout and render data from json
  renderTable(cartData) {
    const cartItem = cartData.map((cart) => {
      return `<tr class="tbl-item">
            <td class="mytable__item">${cart.id}</td>
            <td class="mytable__item">${cart.product}</td>
            <td class="mytable__item">${cart.serialcode}</td>
            <td class="mytable__item">${cart.stock}</td>
            <td class="mytable__item">${cart.category}</td>
            <td class="mytable__item mytable__action">
            <a href="javascript:void(0)" class="action-edit">Edit</a>
            <a href="javascript:void(0)" class="action-delete">Delete</a></td>
            </tr>`;
    });
    this.cartTable.innerHTML = cartItem.join("");
    this.btnDelete = document.querySelectorAll(".action-delete");
    this.deleteCartItem();
  }

  //function delete cart item from id when click "delete"
  deleteCartItem() {
    this.btnDelete.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const row = button.closest(".tbl-item");
        const id = row.firstElementChild.textContent;
        CartService.deleteCart(id);
        window.location.href = "manager.html";
      });
    });
  }
}

export default CartView;
