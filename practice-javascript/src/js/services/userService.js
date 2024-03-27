import { API } from "../constants/url";

export default class UserService {
  //function get user from json
  static getUser = async () => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.USER}`, {
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
      throw new Error("Failed to get user.");
    }
  };

  //function create user from json
  static createUser = async (user) => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.USER}`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      throw new Error("Failed to create new user.");
    }
  };
}
