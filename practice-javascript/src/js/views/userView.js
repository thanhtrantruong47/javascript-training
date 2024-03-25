class UserView {
  constructor() {
    this.username = document.querySelector("#email");
    this.password = document.querySelector("#password");
    this.btnLogin = document.querySelector(".login__btn");
    this.valiEmail = document.querySelector("#email-validate");
    this.valipassword = document.querySelector("#password-validate");
    this.valiRepassword = document.querySelector("#re-password-validate");
    // create
    this.repassword = document.querySelector("#re-password");
    this.valiRepassword = document.querySelector("#re-password-validate");
    this.fname = document.querySelector("#fname");
    this.lname = document.querySelector("#lname");
    this.avatar = document.querySelector("#avatar");
    this.phonenumber = document.querySelector("#phone");
    this.btnSignUp = document.querySelector(".sign-up__btn");
  }

  handleLogin(dataUser) {
    function validateEmail(email) {
      var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailPattern.test(email);
    }

    this.btnLogin.addEventListener("click", (e) => {
      e.preventDefault();

      if (!validateEmail(this.username.value)) {
        this.valiEmail.textContent =
          "Email address empty or wrong format, example: username@somewhere.sth";
        console.log(this.username.value);
      } else if (this.password.value === "") {
        this.valipassword.textContent =
          "Please enter the password math for Username. (No leading or trailing spaces)";
      } else {
        const user = dataUser.find(
          (user) =>
            user.email === this.username.value &&
            user.password === this.password.value
        );
        if (user) {
          if (user.role === "admin") {
            window.location.href = "manager.html";
          } else {
            window.location.href = "index.html";
          }
        } else {
          alert("Account or Password not found");
        }
      }
    });
  }

  handleSignUp() {
    this.btnSignUp.addEventListener("click", (e) => {
      e.preventDefault();
      const data = {
        email: this.username.value,
        password: password.value,
        first_name: fname.value,
        last_name: lname.value,
        avatar_url: avatar.value,
        phone_number: this.phonenumber.value,
        role: "user",
      };
      return data;
    });
  }
}
export default UserView;

const k = new UserView();
k.handleSignUp();
