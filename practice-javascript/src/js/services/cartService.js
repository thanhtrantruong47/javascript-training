import { API } from "../constants/url";

export default class CartService {
  //function get data
  static getCart = async () => {
    const res = await fetch(`${API.BASE_URL}${API.CART}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application-json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to get cart item.");
    }
    const data = res.json();
    return data;
  };

  // function delete cart item => id
  static deleteCart = async (id) => {
    const res = await fetch(`${API.BASE_URL}${API.CART}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application-json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete cart item.");
    } else {
      window.location.href = "manager.html";
    }
  };
}
