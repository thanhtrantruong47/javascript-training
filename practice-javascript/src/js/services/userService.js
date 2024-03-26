import { API } from "../constants/url";

export default class UserService {
  //function get user from json
  static userLogin = async () => {
    const res = await fetch(`${API.BASE_URL}${API.USER}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application-json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to get user.");
    }
    const data = res.json();
    return data;
  };

  //function delete user from json
  static createUser = async (user) => {
    const res = await fetch(`${API.BASE_URL}${API.USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error("Failed to create new user.");
    } else {
      alert("Create account success.");
      // window.location.href = "login.html";
    }
  };

  static findUserValidate = async (username) => {
    const res = await fetch(`${API.BASE_URL}${API.USER}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application-json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to get user.");
    }
    const data = res.json();
    const findUser = data.find(
      (findUser) => findUser.email === username
    )
    if(findUser) {
      console.log("sadksadsaj")
      return true;
    } else {
      return false;
    }
  }
}
