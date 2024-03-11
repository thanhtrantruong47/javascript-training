// Given an array a, perform the following operations:

// Calculate the sum of the elements of a and print display

// Given two numbers m and n, print the elements of a in the range [m..n] in order from smallest to largest.

// Print out the prime numbers in a.

const arr = [1, 2, 5, 6, 9, 3, 11, 25, 39, 31];

arr.unshift(5);
arr.splice(3, 0, 555);
console.log(arr);

let sum = 0;
for (let value of arr) {
  sum = sum + value;
}

console.log(sum);

const nt = (x) => {
  if (x < 2) return true;

  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
};

const get = (m, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > m && arr[i] < n) {
      console.log(arr[i], "m < x < n");
    }
    if (nt(arr[i]) === true) {
      console.log(arr[i], "it NT");
    }
  }
};

get(10, 40)

class Car {
  get1() {
    return "this is car";
  }
}

class Blackcar extends Car {
  get1() {
    return super.get1() + " color black";
  }
}

const blackCar = new Blackcar();
console.log(blackCar.get1());

// create class person
class Person {
  constructor(name,age,adress) {
    this.name=name;
    this.age=age;
    this.adress=adress;
  }

  getName() {
    console.log(this.name);
  }

  getAge() {
    console.log(this.age);
  }

  getAdd() {
    console.log(this.adress);
  }
}

//create new object new person from class and add value
const newPerson = new Person('thanh',20,'112pth');
newPerson.getName();
newPerson.getAge();
newPerson.getAdd();