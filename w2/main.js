// How to Calculate Your Carbon Footprint = https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household.
const myMembers = 2;
// 2. Consider the size of your home
const mySize = 10;
// 3. Evaluate your food choices
const myFood = 10
// 4. Examine your water consumption
const myWater = 3;
// 5. Determine how many household purchases you make each year
const myPurchases = 10;
// 6. Consider how much waste you produce
const myWaste = 50;
// 7. Identify the amount of waste you recycle
const myRecycle = 4;
// 8. Tally up your annual transportation scores
const myTrips = 36
// 9. Add up your points
const Tally = myMembers + mySize + myFood + myWater + myPurchases + myWaste + myRecycle + myTrips
//10. Write JS to update the rendered html (index.html) with total footprint 
const myHeading = document.querySelector("h2");
myHeading.textContent = Tally;