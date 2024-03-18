const x = document.querySelector(".sign-up");
const erroEmail =  document.querySelector(".erroEmail");
const erroUser =  document.querySelector(".erroUser");
const erroPass =  document.querySelector(".erroPass");
const erroCFPass =  document.querySelector(".erroCFPass");
var isValid = true;
const valueEmail =  document.querySelector(".valueEmail");
const valueUser =  document.querySelector(".valueUser");
const valuePass =  document.querySelector(".valuePass");
const valueCFPass =  document.querySelector(".valueCFPass");

const createSingUp = () => {
  console.log(x.email.value);
  console.log(x.username.value);
  console.log(x.password.value);
  console.log(x.cf_password.value);
  if (x.email.value === "") {
    erroEmail.textContent = 'Email address empty or wrong format, example: username@somewhere.sth'
    isValid =false
  }
  if (x.username.value === "") {
    erroUser.textContent = 'Please enter the correct format for Username. (No leading or trailing spaces)'
    isValid = false
  }
  if (x.password.value === "") {
    erroPass.textContent = 'Please enter the correct format for password. (8 characters at least one non-letter)'
    isValid = false
  }
  if (x.cf_password.value === "") {
    erroCFPass.textContent = 'Please enter the correct format for confirm password. (8 characters, at least one non-letter)'
    isValid = false
  } else if (x.cf_password.value !== x.password.value) {
    erroCFPass.textContent = 'Please enter the correct format match'
    isValid = false
  }
  else {
    valueEmail.textContent ='Email: ' + x.email.value
    valueUser.textContent ='Username: ' + x.username.value
    valuePass.textContent ='Password: ' + x.password.value
    valueCFPass.textContent ='Confirm Password: ' + x.cf_password.value
  }
}