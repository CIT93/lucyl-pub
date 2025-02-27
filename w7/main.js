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

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfptotal: total
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



// My code, I started with adding the const that are supposed to go into the body. Such as td and then  Itried hard coding the data in the js. Code is sstill working however I do not know where to go from here. 
// Why did we get the error when we tried to appendChild td? It says it is not defined as it is already declared in function.



FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
})

// Is the apartment score correct? 
// Yes, as I coded on the index, i referenced correctly typing apt for aprtment. 

// Why are we doing all this work in the form to make sure the user gives us good data?
// To make sure that the code can reference correctly the calculation. If it doesn't match the code, then it could not be rendered correctly. For example, the user may put just LaRge, Lrg, big, and the code would not recognize taht it meant Large. It will not run the code so we put rules in place so that it can be correctly user inputed and outputed.