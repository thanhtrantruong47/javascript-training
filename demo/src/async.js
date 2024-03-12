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
  console.log(data);
  setTimeout(() => {
    console.log("ok");
  }, 4000);
  data = await getData;
};

show();

const arr = [1, 2, 3, 6, 5, 8, 9, 4, 1, 89, 45, 22, 55, 66, 3, 3, 120];

const getData = new Promise(function (resolve, reject) {
  let i = 0;
  setTimeout(() => {
    console.log("item");
    while (i < arr.length) {
      console.log(arr[i]);
      i++;
    }
  }, 10000);
});
