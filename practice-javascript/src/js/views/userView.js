class UserView {
  constructor() {
    this.username =  document.querySelector('#email')
    this.password = document.querySelector("#password");
    this.btnLogin = document.querySelector(".login__btn");
    this.valiEmail = document.querySelector(".email-validate");
    this.valipassword = document.querySelector(".password-validate");
  }

  handleLogin(dataUser) {
    this.btnLogin.addEventListener("click", (e) => {
      e.preventDefault()
    if (this.username.value == "" || this.password.value == "") {
        alert("this is empty");
      } else {
        const user = dataUser.find((user) =>
        user.email === this.username.value && user.password === this.password.value
        );
        if (user) {
          if (user.role === "admin") {
            window.location.href = "manager.html";
          } else {
            window.location.href = "index.html";
          }
        } else {
          alert("account not found");
        }
      }
    });
  }
}

export default UserView
