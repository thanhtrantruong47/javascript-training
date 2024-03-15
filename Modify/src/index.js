// Modifying Attributes

const demoImg = document.querySelector("#demo");

console.log(demoImg.hasAttribute("src"));

console.log(demoImg.getAttribute("src"));
demoImg.removeAttribute("src");
console.log(demoImg.hasAttribute("src"));
demoImg.setAttribute(
  "src",
  "https://dulichsinhcafe.com.vn/wp-content/uploads/2017/11/anhr-cafe-sapa.jpg"
);
console.log(demoImg.hasAttribute("src"));

// Modifying Attributes class

const demoBtn = document.querySelector(".show");
demoBtn.setAttribute('style', 'boder-radius: 20px')


const demoNav = document.querySelector(".nav");

demoNav.classList.add("hidden"); // add hidden for nav the nav will hidden in page
demoNav.classList.toggle("hidden"); // hidden opened behave this code so when call this line code the hidden will off and navbara show in page

demoBtn.addEventListener("click", () => {
  demoNav.classList.toggle('hidden') // when click btn class hidden will onpen and off this navbar will show and hidden for page :))
});

const actionMinus = document.querySelector(".minus");
const actionPlus = document.querySelector(".plus");
let showNum = document.querySelector(".num");

console.log(actionMinus.classList.contains("king")); // console log = false

let a = 0; // create varibale num

// the func check num > 0 when click num - 1 if num = 0 when click num alway = 0
actionMinus.addEventListener("click", () => {
  if (a > 0) {
    a = a - 1;
  }
  document.querySelector(".num").innerHTML = a;
});

actionPlus.addEventListener("click", () => {
  a = a + 1;
  showNum.innerHTML = a;
  document.querySelector(".num").innerHTML = a;
});
