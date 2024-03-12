const a = 15;

if(a > 10) {
  console.log(a);
}

for (let i = 0 ; i < 10 ; i++) {
  console.log(i);
}

console.log(i); // variable i only visible inside the block where it is defined.

function getValue() {
  let value = 50;
  for(let i=0; i< value/2 ; i++) {
    console.log(value);
  }
  console.log(i); // variable i only visible inside the block where it is defined.
}


// console.log(value); variable value only visible inside the block where it is defined.
// getValue() //call funct getValue to log

function getValue() {
  let value = 50;
  for(var i=0; i< value/2 ; i++) {
    console.log(value);
  }
  console.log(i);// a block does not define a new scope for var
  // console.log(i); variable i only visible inside the block where it is defined.
}