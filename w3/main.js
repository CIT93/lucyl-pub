function determineHouseHoldPts() {
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
