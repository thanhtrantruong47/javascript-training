function outScreen(x, y) {
  return console.log(x, y);
}

// create variable and value
const a = 5; //type number
const b = "thanh123456"; // type string
let c; // type freedom
const arr = []; // array arr empty

//demo lenght in string
function outLog() {
  for (let i = 0; i < b.length; i++) {
    arr.push(b[i]); // push value to string b to arr
  }
}

// print index of value arr + "arr"
function arrLog() {
  for (let i = 0; i < arr.length; i++) {
    document.write(i + " " + "arr");
  }
}

//add value for array arr
function arrPop() {
  document.write(arr.shift());
}

// create value for variable c type string
c = "this is demo value and type";
outScreen(c); // y empty so it console undefined
console.log(a + " " + b);
// create value for variable c type number
c = 4;
outScreen(c,c); // y empty so it console undefined
console.log(b);
console.log(b.length);
outLog();
console.log("this is vaule arr");
console.log(arr);

// example string
const sum = 1+2+3+4; // create variable sum = 10
const string = `Hey
is awesome! ${sum}` ; // string + sum
// console.log(string); // log in client

// example for conditional

if (string.length > 20) {
  console.log(string, "acces");
}

else {
  console.log("err")
}

