let sum = 0;

function getValue() {
  for (let i = 0; i < 50; i++) {
    sum = sum + i;
  }
  return sum;
}

function show() {
  console.log(getValue());
}


// set time out
console.log("the firts");
setTimeout(show, 5000);
console.log("the end");
