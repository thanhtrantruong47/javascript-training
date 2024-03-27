import { API } from "../constants/url";

export default class CartService {
  //function get data
  static getCart = async () => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.CART}`, {
        method: "GET",
        headers: {
          "Content-Type": "Application-json",
        },
      });
      if (res) {
        const data = res.json();
        return data;
      }
    } catch (error) {
      throw new Error("Failed to get cart.");
    }
  };

  // function delete cart item => id
  static deleteCart = async (id) => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.CART}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "Application-json",
        },
      });
    } catch (error) {
      throw new Error("Failed to get cart.");
    }
  };
}
