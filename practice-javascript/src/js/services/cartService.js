import { API } from "../constants/url";

export default class cartService {
  static getCart = async() => {
    const res = await fetch(`${API.BASE_URL}${API.CART}`,{
      method : "GET",
      headers :{
      "Content-Type" : "Application-json",
    },
    });
    if(!res.ok){
      throw new Error("Fetch api fail")
    }
    const data = res.json();
    return data;
  }
}