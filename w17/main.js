import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPts,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

//function to validate a single field
const validateField = (event) => {
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

const determineRecycleItems = e => {
    const numberChecked = document.querySelectorAll('.recycle:checked').length;
    return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    alum: e.target.alum.checked,
    steel: e.target.steel.checked,
    compost: e.target.compost.checked,
    recyclePoints: (24-(numberChecked * 4))
    }
}


FORM.addEventListener("submit", (e) => {
  e.preventDefault();
// const recycleObj = determineRecycleItems(e);
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    console.log (e.target.publicTransport.value)
    const fbObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
    //   parseInt(e.target.water.value)
      
    //   parseInt(e.target.waterDish.value),
    //   parseInt(e.target.waterWash.value)

      e.target.waterDish.value,
      e.target.waterWash.value,
      e.target.purchase.value,
      e.target.waste.value,
      determineRecycleItems(e),
      e.target.personal.value,
      e.target.publicTransport.value,
      e.target.flights.value


    );

    cfpData.push(fbObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

