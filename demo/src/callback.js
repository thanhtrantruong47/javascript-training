function getValue(value1, callback) {
  //callback func value
  console.log("this is value ", value1);
  callback(value1); // set value1 for func value
}

let sum = 0; // create value sum = 0

function value(num) {
  // func return 1 + 2 + .. + num
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

function show() {
  // func log vari sum form func value and timeout delay 2000
  setTimeout(() => {
    console.log(value());
  }, 2000);
  console.log("this is sum");
}

// getValue(50, value); // passing func
// show();

const arr = [1, 5, 6, 3, 2, 8, 9, 66, 33, 22, 0, 15, 99, 88, 77];

const showArr = (x) => {
  for (let i =0 ; i < arr.length; i++) {
    if(arr[i]>x) {
      console.log("this is value form arr: ",arr[i]);
    }
  }
};

const getArr = (value, showArr) => {
  console.log("this is value: ",value);
  showArr(value);
}

getArr(60, showArr);

const count = null;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);
