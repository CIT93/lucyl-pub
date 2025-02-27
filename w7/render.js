const TBL = document.getElementById("tab-data")

function renderTblHeading(){
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "Footprint"];
  // const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Action" ];
  headingTextArr.forEach(function(text){
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table
}

function renderTbl(data){
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    // const trTextArr = ["Lucy", "Large", 20];
    const trTextArr = ["Lucy", 20];
    trTextArr.forEach(function(text){
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
  })
  const td = document.createElement("td");
  // const btnEdit = document.createElement("button");
  // const btnDel = document.createElement("button");
  // btnEdit.textContent = "Edit";
  // btnDel.textContent = "Del";
  
  // td.appendChild(btnEdit);
  // td.appendChild(btnDel);
  tr.appendChild(td)
  tbody.appendChild(tr)
  table.appendChild(tbody);
  console.log(table)
    // const thead = document.createElement("thead");
    // const tr = document.createElement("tr");
    // const tbody = document.createElement("tbody");
    // const td = document.createElement("td")
    // const headingTextArr = ["Name = Lucy", "Household = 3", "HouseSize = Large", "Footprint = 12", "Action = Reduce" ];
    TBL.appendChild(table);
  }

  export {renderTbl};