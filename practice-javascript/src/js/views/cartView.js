class CartView {
  constructor() {
    this.cartTable = document.querySelector(".mytable");
  }

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
  }
}

export default CartView;
