import { API } from "../constants/url";

export default class UserService {
  static userLogin = async () => {
    const res = await fetch(`${API.BASE_URL}${API.USER}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application-json",
      },
    });
    if (!res.ok) {
      throw new Error("Fetch api fail");
    }
    const data = res.json();
    return data;
  };

  static createUser = async (user) => {
    console.log(user)
    const res = await fetch(`${API.BASE_URL}${API.USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error("post user fail");
    } else {
      // alert("Create account success");
      // window.location.href = "login.html";
    }
  };
}
