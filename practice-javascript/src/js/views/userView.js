import UserService from "../services/userService";

class UserView {
  constructor() {
    this.username = document.querySelector("#email");
    this.password = document.querySelector("#password");
    this.btnLogin = document.querySelector(".login__btn");
    // valiate login form
    this.valiEmail = document.querySelector("#email-validate");
    this.valipassword = document.querySelector("#password-validate");
    // create form sign up
    this.myFormSignUp = document.querySelector(".signup");
    this.repassword = document.querySelector("#re-password");
    this.valiRepassword = document.querySelector("#re-password-validate");
    this.fname = document.querySelector("#fname");
    this.lname = document.querySelector("#lname");
    this.avatar = document.querySelector("#avatar");
    this.phonenumber = document.querySelector("#phone");
     // valiate sign up form
    this.btnSignUp = document.querySelector(".sign-up__btn");
    this.fnameVali = document.querySelector("#fname-validate");
    this.lnameVali = document.querySelector("#lname-validate");
    this.avatarVali = document.querySelector("#avatar-validate");
    this.phoneVali = document.querySelector("#phone-validate");
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
      let data
      e.preventDefault();
      function validateEmail(email) {
        var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
      }

      function validatePhone(phone) {
        var phoneRegex = /^0\d{9}$/;
        return phoneRegex.test(phone);
      }

      try {
        const isVali = true;
        if (!validateEmail(this.username.value)) {
          this.valiEmail.textContent =
            "Email address empty or wrong format, example: username@somewhere.sth";
          return !isVali;
        }

        if (this.password.value === "" || this.password.value.length < 7) {
          this.valipassword.textContent =
            "Please enter the password math for Username or min size 8. (No leading or trailing spaces)";
          return !isVali;
        }

        if (
          this.repassword.value === "" ||
          this.repassword.value !== this.password.value
        ) {
          this.valiRepassword.textContent =
            "Please enter the re password math for Username or min size 8. (No leading or trailing spaces)";
          return !isVali;
        }

        if (this.fname.value === "") {
          this.fnameVali.textContent = "Please enter the the first name";
          return !isVali;
        }

        if (this.lname.value === "") {
          this.lnameVali.textContent = "Please enter the the last name";
          return !isVali;
        }

        if (this.avatar.value === "") {
          this.avatarVali.textContent = "Please enter choose the avatar image";
          return !isVali;
        }

        if (!validatePhone(this.phonenumber.value)) {
          this.phoneVali.textContent = "Please enter your phone number fomat";
          return !isVali;
        }
        if (isVali) {
          data = {
            email: this.username.value,
            password: this.password.value,
            first_name: this.fname.value,
            last_name: this.lname.value,
            avatar_url: this.avatar.value,
            phone_number: this.phonenumber.value,
            role: "user",
          };
        }
        UserService.createUser(data);
      } catch (error) {
        alert(error.message);
      }
    });
  }
}
export default UserView;
