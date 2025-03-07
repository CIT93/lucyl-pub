import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];



// function displayOutObj(obj) {
// console.log(obj)
// const output = document.getElementById("output");
// const newH2 = document.createElement("h2");
// newH2.textContent = `Carbon Footprint total is ${obj.cfptotal}`;
//   output.appendChild(newH2);
// }

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total
}); 
}

// function displayOutput() {
    
//     for (obj of cfpData) {
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint total is ${obj.cfptotal}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = 'Based on number in Household and Size of Home'
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of ${obj.houseM} (score: ${obj.houseMPTS})`;
//     newP.textContent += ` and a ${obj.houseS} size of home (score ${obj.houseSPTS})`
//     OUTPUT.appendChild(newH2);
//     OUTPUT.appendChild(newH3);
//     OUTPUT.appendChild(newP);
//   }
// }



FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  // start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
})
