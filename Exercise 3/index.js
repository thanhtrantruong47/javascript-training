const txt = document.querySelector(".js-task-name");
const numberTask = document.querySelector(".js-pomodoro-count");
const insert_Row = () => {
  let myTbl = document.querySelector(".js-task-table-body ").insertRow(0); //create new row tabl
  let row1 = myTbl.insertCell(0);
  let row2 = myTbl.insertCell(1);
  let doing = 0;
  let btnDone = document.createElement("BUTTON");
  btnDone.innerHTML = "Done";
  let btnCreate = document.createElement("BUTTON");
  btnCreate.innerHTML = "Create";
  let btnDelete = document.createElement("BUTTON");
  btnDelete.innerHTML = "Delete";
  let textFinsh = document.createElement("div");
  textFinsh.innerHTML = "finish";
  textFinsh.style.display = "none";
  const up = " / ";
  row1.innerHTML = txt.value;
  row2.innerHTML = doing + up + numberTask.value + " pomodori";
  let row3 = myTbl.insertCell(2);
  row3.style.display = "flex";
  row3.style.gap = "10px";
  row3.appendChild(textFinsh);
  row3.appendChild(btnDone);
  row3.appendChild(btnCreate);
  row3.appendChild(btnDelete);

  btnDone.addEventListener("click", () => {
      textFinsh.style.display = "block";
      btnDone.style.display = "none";
      btnCreate.style.display = "none";
  });
  btnCreate.addEventListener("click", () => {
    if (doing < numberTask.value) {
      doing = doing + 1;
      row2.innerHTML = doing + up + numberTask.value + " pomodori";
    }
  });

  btnDelete.addEventListener("click", () => {
    myTbl.remove(myTbl.row1);
  });
};
