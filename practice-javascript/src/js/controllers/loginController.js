const username = document.querySelector('#email')
const password = document.querySelector('#password')
const btnLogin = document.querySelector('.login__btn')
const valiEmail = document.querySelector('.email-validate')
const valipassword = document.querySelector('.password-validate')

const api = "http://localhost:3000/user"

const getUser = async () => {
  const res = await fetch(api)
  const data = await res.json()
  return data
}

btnLogin.addEventListener("click" , (e) => {
  e.preventDefault()
  if(username.value == "" || password.value == "") {
    alert("this is empty")
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) => user.email === username.value && user.password === password.value
      )
      if(user) {
        if (user.role === "admin")
        {
          window.location.href = "manager.html"
        }
        else {
          window.location.href = "index.html"
        }
      }
      else {
        alert("account not found")
      }
    })
  }
})