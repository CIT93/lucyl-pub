function determineHouseHoldPts(numberInHousehold) {
  console.log("Inside the fuction");
  if (numberInHousehold === 1) {
    carbonFootPrintPoints = carbonFootPrintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootPrintPoints = carbonFootPrintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootPrintPoints = carbonFootPrintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootPrintPoints = carbonFootPrintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootPrintPoints = carbonFootPrintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootPrintPoints = carbonFootPrintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootPrintPoints = carbonFootPrintPoints + 2;
  }
  console.log(
    `Based on the number of members of the household ${numberInHousehold} the points would be ${carbonFootPrintPoints}.`
  );
}

let carbonFootPrintPoints = 0;
//const numberInHousehold = 3;

// global scope

determineHouseHoldPts(3);
determineHouseHoldPts(4);

function cfpHomeSize(homeSize) {
  if (homeSize === "Small") {
      homeSizePts = homeSizePts + 10;
  } else if(homeSize === "Medium") {
      homeSizePts = homeSizePts + 7;
  } else if(homeSize === "large") {
      homeSizePts = homeSizePts + 4;
  } else if(homeSize === "Apartment") {
      homeSizePts = homeSizePts + 2;
  }
  console.log(`If your home is ${homeSize} sized, then your carbon footprint total is: ${homeSizePts}`)
}

const homeSize = "";
let homeSizePts = 0;

cfpHomeSize("Small")
cfpHomeSize("Medium")
cfpHomeSize("large")