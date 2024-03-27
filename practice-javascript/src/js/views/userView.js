import UserService from "../services/userService";

class UserView {
  constructor() {
    this.username = document.querySelector("#email");
    this.password = document.querySelector("#password");
    this.btnLogin = document.querySelector(".login__btn");

    // create form sign up
    this.myFormSignUp = document.querySelector(".signup");
    this.repassword = document.querySelector("#re-password");
    this.valiRepassword = document.querySelector("#re-password-validate");
    this.fname = document.querySelector("#fname");
    this.lname = document.querySelector("#lname");
    this.avatar = document.querySelector("#avatar");
    this.phonenumber = document.querySelector("#phone");
    this.btnSignUp = document.querySelector(".sign-up__btn");
  }

  //function login
  handleLogin(dataUser) {
    function validateEmail(email) {
      var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailPattern.test(email);
    }
    this.btnLogin.addEventListener("click", (e) => {
      e.preventDefault();
      const user = dataUser.find(
        (user) =>
          user.email === this.username.value &&
          user.password === this.password.value
      );

      try {
        if (!validateEmail(this.username.value)) {
          throw new Error(
            "Email address empty or wrong format, example: username@gamil.com"
          );
        }

        if (this.password.value === "" || this.password.value.length < 7) {
          throw new Error(
            "Please enter the password math for Username. (No leading or trailing spaces)"
          );
        }
        if (!user) {
          throw new Error("Account or Password not found");
        } else {
          if (user.role === "admin") {
            window.location.href = "manager.html";
          } else {
            window.location.href = "index.html";
          }
        }
      } catch (error) {
        alert(error.message);
      }
    });
  }

  //function sign up
  handleSignUp(dataUser) {
    this.btnSignUp.addEventListener("click", (e) => {
      e.preventDefault();
      //validate username "email"
      function validateEmail(email) {
        var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
      }

      //validate number phone
      function validatePhone(phone) {
        var phoneRegex = /^0\d{9}$/;
        return phoneRegex.test(phone);
      }

      const user = dataUser.find((user) => user.email === this.username.value);

      try {
        if (!validateEmail(this.username.value)) {
          throw new Error(
            "Email address empty or wrong format, example: username@gamil.com"
          );
        }

        if (this.password.value === "" || this.password.value.length < 7) {
          throw new Error(
            "Please enter the password math for Username or min size 8"
          );
        }

        if (
          this.repassword.value === "" ||
          this.repassword.value !== this.password.value
        ) {
          throw new Error(
            "Please enter the re-password math for Username or min size 8"
          );
        }

        if (this.fname.value === "") {
          throw new Error("Please enter the the first name");
        }

        if (this.lname.value === "") {
          throw new Error("Please enter the the last name");
        }

        if (this.avatar.value === "") {
          throw new Error("Please enter choose the avatar image");
        }

        if (!validatePhone(this.phonenumber.value)) {
          throw new Error("Please enter your phone number fomat");
        }

        if (user) {
          throw new Error("Email address user name already exists");
        } else {
          const data = {
            email: this.username.value,
            password: this.password.value,
            first_name: this.fname.value,
            last_name: this.lname.value,
            avatar_url: this.avatar.value,
            phone_number: this.phonenumber.value,
            role: "user",
          };

          //post user to json
          UserService.createUser(data);
          alert("Create success new user");
          window.location.href = "login.html";
        }
      } catch (error) {
        alert(error.message);
      }
    });
  }
}
export default UserView;
