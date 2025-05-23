import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";
// import { addRow } from "./hof.js";

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
  const tableRef = document.getElementById("table-id");
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newTD_2 = newTR.insertCell(0);
  // let newTD_3 = newTR.insertCell(0);
  // let newTD_4 = newTR.insertCell(0);
  let newLabl = document.createTextNode(`Average Footprint Score`);
  let newText = document.createTextNode(
    `${Math.floor(reduceTotal / data.length)}`
  );
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);
};

const renderTblHeading = () => {
  // TBL.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("id", "table-id");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];
  // const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Action" ];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", (e) => {
    // console.log("Hello from inside the delte button");
    // console.log(e);
    onUpdate(index, data);
  });
  btnEdit.addEventListener("click", (e) => {
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.housem.value = obj.houseMembers;
    FORM.houses.value = obj.houseSize;
    FORM.foodChoice.value = obj.foodChoice;
    FORM.foodSource.value = obj.foodSource;
    // FORM.water.value = obj.waterConsumPoints.toString();
    FORM.waterDish.value = obj.waterDish;
    FORM.waterWash.value = obj.waterWash;
    FORM.purchase.value = obj.purchase;
    FORM.waste.value = obj.waste;
    FORM.glass.checked = obj.recycle.glass;
    FORM.plastic.checked = obj.recycle.plastic;
    FORM.steel.checked = obj.recycle.steel;
    FORM.paper.checked = obj.recycle.paper;
    FORM.compost.checked = obj.recycle.compost;
    FORM.personal.value = obj.personal;
    FORM.publicTransport.value = obj.publicTransport;
    FORM.flights.value = obj.flights;
    onUpdate(index, data);
  });

  return td;
};

const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    console.log(index);
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total"];
    keys.forEach((key) => {
      const td = document.createElement("td");
      console.log(obj)
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};

// const avg = total

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(data);
  }

  // const thead = document.createElement("thead");
  // const tr = document.createElement("tr");
  // const tbody = document.createElement("tbody");
  // const td = document.createElement("td")
  // const headingTextArr = ["Name = Lucy", "Household = 3", "HouseSize = Large", "Footprint = 12", "Action = Reduce" ];
};

export { renderTbl };
