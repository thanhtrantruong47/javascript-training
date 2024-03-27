import CartService from "../services/cartService";

class CartView {
  constructor() {
    this.cartTable = document.querySelector(".mytable");
    this.headTable = document.querySelector(".table_head");
    this.myAsideList = document.querySelector(".aside__list");
    this.asideItem = document.querySelectorAll(".aside__item");
    this.tableUser = document.querySelector(".mytable-user");
    this.headTableUser = document.querySelector('.table_head-user')
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
        row.remove(".tbl-item")
        CartService.deleteCart(id);
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
        if (
          action.closest("li").firstElementChild.textContent === "Dashboard"

        ) {
          this.cartTable.classList.remove("hidden");
          this.headTable.classList.remove("hidden")
        } else {
          this.cartTable.classList.add("hidden");
          this.headTable.classList.add("hidden")
        }
        if (
          action.closest("li").firstElementChild.textContent === "User management"
        ) {
          this.tableUser.classList.remove("hidden");
          this.headTableUser.classList.remove("hidden")
        } else {
          this.tableUser.classList.add("hidden");
          this.headTableUser.classList.add("hidden")
        }
      });
    });
  }
}

export default CartView;