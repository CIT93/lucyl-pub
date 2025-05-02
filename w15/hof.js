// // import { cfpData } from "./storage";

// // function average() {
// // const avgCFP = cfpData.reduce((sum, len) => sum + len, 0)
// // const avgTotal = avgCFP/cfpData.length
// // return avgTotal
// // }


// function addRow(){
//     const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0)
//     const tableRef = document.getElementById("table-id")
//     let newRow = tableRef.insertRow(-1)
//     let newCell = newRow.insertCell(0);
//     let newCell_1 = newRow.insertCell(1);
//     let newCell_2 = newRow.insertCell(2);
//     let newCell_3 = newRow.insertCell(3);
//     let newCell_4 = newRow.insertCell(4);
//     let newLabl = document.createNewTextNode("Average Footprint Score");
//    let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`)
//    newCell_1.appendChild(newText)
//    newCell.appendChild(newText)
//     }


//     addRow()

//     export {addRow}