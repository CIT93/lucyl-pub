import { cfpData } from "./storage";

function average() {
const avgCFP = cfpData.reduce((sum, len) => sum + len, 0)
const avgTotal = avgCFP/cfpData.length
return avgTotal
}


function addRow(){
    let tableRef = document.getElementById("tableID")
    
    let newRow = tableRef.insertRow(-1)
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    
    cell1.textContent = "";
    cell2.textContent = "";
    cell3.textContent = "";
    cell4.newText = document.createNewTextNode("Average Footprint Score");
    cell5.textContent = "";
    
    newCell.appendChild(newText)
    }

    export {addRow}