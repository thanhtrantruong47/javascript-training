const api = "http://localhost:3000/user";

const username = document.querySelector("#email");
const password = document.querySelector("#password");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const avatar = document.querySelector("#avatar");
const phonenumber = document.querySelector("#phone");
const btnSignUp = document.querySelector(".sign-up__btn");

btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    username.value == "" ||
    password.value == "" ||
    fname.value == "" ||
    lname.value == "" ||
    avatar.value == "" ||
    phonenumber.value == ""
  ) {
    alert("not empty");
  } else {
    const user = {
      email: username.value,
      password: password.value,
      first_name: fname.value,
      last_name: lname.value,
      avatar_url: avatar.value,
      phone_number: phonenumber.value,
      role: "user",
    };
    fetch(api , {
      method : "POST",
      headers: {
        "Content-Type" : "Application/json"
      },
      body: JSON.stringify(user)
    })
    .then(() => {
      alert("Success create your account username")
      window.location.href = "login.html"
    })
  }
});