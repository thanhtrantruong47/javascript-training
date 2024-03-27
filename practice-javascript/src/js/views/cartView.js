import CartService from "../services/cartService";

class CartView {
  constructor() {
    this.cartTable = document.querySelector(".mytable");
    this.headTable = document.querySelector(".thead");
    this.myAsideList = document.querySelector(".aside__list");
    this.asideItem = document.querySelectorAll(".aside__item");
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

  // when click item in aside add class active
  HandleAside() {
    this.asideItem.forEach((action) => {
      action.addEventListener("click", (e) => {
        e.preventDefault();
        // remove class active if item not click
        this.asideItem.forEach((item) => {
          if (item !== action)
            item.closest("li").classList.remove("aside__active");
        });

        //add class active when click item
        action.closest("li").classList.add("aside__active");
      });
    });
  }
}

export default CartView;

// const k = new CartView();
// k.HandleAside();
