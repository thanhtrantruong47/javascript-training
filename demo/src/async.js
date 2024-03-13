const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

const show = async () => {
  // program will await 4s to log "success" and after "succes"
  // will await 4s to log "ok"
  // and after 2s will log getValue
  let data = await promise;
  console.log("ok");
  console.log(data);
  let data1 = await getData;
};

show();

const arr = [1, 2, 3, 6, 5, 8, 9, 4, 1, 89, 45, 22, 55, 66, 3, 3, 120];

const getData = new Promise(function (resolve, reject) {
  let i = 0;
    console.log("item");
    while (i < arr.length) {
      console.log(arr[i]);
      i++;
    }
});

function value() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("this promise erro");
    }, 2000);
  });
}

function value1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("this promise1");
    }, 2000);
  });
}

const getValue = async () => {
  try {
    console.log("this is a");
    let data = await value();
    console.log(data);
    console.log("this is c");
    data = await value1();
    console.log(data);
  } catch (erro) {
    console.log(data);
  }
};

getValue();
