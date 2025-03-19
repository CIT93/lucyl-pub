import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME,LNAME, SUBMIT} from "./global.js";
import { saveLS, cfpData} from "./storage.js";

// const start =  (first, last, houseHoldMembers, houseSize) => {
//   const houseHoldPTS = determineHouseHoldPts();
//   const houseSizePts = determineHouseSizePts();
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     firstName: first,
//     lastName: last,
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePts,
//     cfpTotal: total
// }); 
// }

const start =  (...i) => {
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const houseSizePts = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: i[0],
    lastName: i[1],
    houseM: i[2],
    houseS:i[3],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total
}); 
}

renderTbl(cfpData);

//function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`)

  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid'); 
  } else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
}

//Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

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



FORM.addEventListener('submit', e => {
  e.preventDefault();

  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    // const houseMembers = parseInt(FORM.housem.value);
    // const houseSize = FORM.houses.value;
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS (cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }

})

// rest operator
//a=10 is the default value
// const add2 = function (...a) {
//   return 2 + a[4];
// }

// const result = add2(1, 2, 3, 4);

//arrow function

const add2 = a => 2 + a;
  
  
  const result = add2(100);

//IFFIE

const a = 3;

(function(a){
  console.log("inside IIFE")
  console.log(a)
})(a);