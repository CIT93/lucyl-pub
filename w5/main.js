// const cfpData = [];
// function determineHouseSizePts(size) {
//   let houseSizePoints = 0;
//   if (size === "large") {
//     houseSizePoints = 10;
//   } else if (size === "medium") {
//     houseSizePoints = 7;
//   } else if (size === "small") {
//     houseSizePoints = 4;
//   } else if (size === "apt") {
//     houseSizePoints = 2;
//   }
//   return houseSizePoints;
// }
// function determineHouseHoldPts(numberInHousehold) {
//   let houseHoldPoints = 0;
//   if (numberInHousehold === 1) {
//     houseHoldPoints = 14;
//   } else if (numberInHousehold === 2) {
//     houseHoldPoints = 12;
//   } else if (numberInHousehold === 3) {
//     houseHoldPoints = 10;
//   } else if (numberInHousehold === 4) {
//     houseHoldPoints = 8;
//   } else if (numberInHousehold === 5) {
//     houseHoldPoints = 6;
//   } else if (numberInHousehold === 6) {
//     houseHoldPoints = 4;
//   } else if (numberInHousehold > 6) {
//     houseHoldPoints = 2;
//   }
//   return houseHoldPoints;
// }

// function displayOutObj(obj) {
// console.log(obj)
// const output = document.getElementById("output");
// const newH2 = document.createElement("h2");
// newH2.textContent = `Carbon Footprint total is ${obj.cfptotal}`;
//   output.appendChild(newH2);
// }

// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePts = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseHoldPTS,
//     cfptotal: total
// });

 
// }

// function displayOutput() {
//   for (obj of cfpData) {
//     console.log(obj)
//     const output = document.getElementById("output");
//     const newP = document.createElement("p");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint total is ${obj.cfptotal}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = 'Based on number in Household and Size of Home'
//     newP.textContent = `This number is based on the number of ${obj.houseM} (score: ${obj.houseMPTS})`;
//     newP.textContent += ` and a ${obj.houseS} size of home (score ${obj.houseSPTS})`
//     output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP);
//   }
// }

// start(1, "apt");
// start(2, "apt");
// start(3, "apt");
// start(4, "apt");

// displayOutput()

const movieArr = [
  {title: "Lord of the Rings; The Fellowship of the Ring", year: "2001", Rating: "10/10"},
  {title: "Willow", year: "1988", Rating: "7/10"},
  {title: "Intestellar", year: "2014", Rating: "9/10"},
  {title: "Luca", year: "2021", Rating: "8/10"},
  {title: "Shawshank Redemption", year: "1994", Rating: "9/10"},
  
]


for (const obj of movieArr) {

  const newH2 = document.createElement("h2");
  newH2.textContent = `${obj.title} (${obj.year}) with a rating of ${obj.Rating}`;
  
  output.appendChild(newH2);
}