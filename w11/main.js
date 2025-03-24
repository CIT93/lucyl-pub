import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize, foodChoice) => {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts + foodPts;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPts,
    houseSPTS: houseSizePts,
    foodPts: foodChoice,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

//function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

//Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

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

FORM.addEventListener("submit", e => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    // const houseMembers = parseInt(FORM.housem.value);
    // const houseSize = FORM.houses.value;
    // start(
    //   FNAME.value,
    //   LNAME.value,
    //   parseInt(FORM.housem.value),
    //   FORM.houses.value
    // );
    const fbObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.housem.value),
      FORM.houses.value
    );
    // fbObj.HouseHoldPoints();
    // fbObj.HouseSizePoints();
    cfpData.push(fbObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

// //a=10 is the default value
// const add2 = function (...a) {
//   return 2 + a[4];
// }

// const result = add2(1, 2, 3, 4);

// spread argrument

//IFFIE

// const a = 3;

// (function(a){
//   console.log("inside IIFE")
//   console.log(a)
// })(a);

// const me = {
//   name: "Lucy",
//   hairColor: "Black",
//   location: "Home",
//   sleepScore: 78,
//   introduce: function() {
//     console.log(this)
//     console.log( `This is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//   }
// }

// const you = {
//   name: "Jane",
//   hairColor: "Brown",
//   location: "Home",
//   sleepScore: 55,
//   introduce: function() {
//     console.log(this)
//     console.log( `This is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//   }
// }

// me.introduce()
// you.introduce()

// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name;
//     this.hairColor = hairColor;
//     this.location = location;
//     this.sleepScore = sleepScore;
//   }
//   introduce() {
//     console.log(
//       `This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had sleepScore of ${this.sleepScore}`
//     );
//   }
// }

// const lucy = new Human("Lucy", "Black", "Home", 78);
// const jane = new Human("Jane", "Brown", "Home", 55);
// lucy.introduce();
// jane.introduce();
// lucy.hrv = 50;
