//create func promise
const promi = new Promise((resolve, reject) => {
  let condition = true;
  if(condition) {
     // request API
    resolve('Success');
  }
  else {
    reject('Error');
  }
});

// call value before getValue
promi
.then((getValue) => {
  value();
})

//call show before value
.then((value) => {
  show();
})


function getValue(value1) {
  console.log("this is value ", value1);
  return value1;
}

getValue(20);


function value() {
  let sum = 0;
  for (let i = 1; i <= 20; i++) {
    sum = sum + i;
  }
  return sum;
}

function show() {
  setTimeout(() => {
    console.log(value());
  }, 2000);
  console.log("this is sum");
}
