import { activityForm, output} from "./global.js";
import {renderTable} from "./renderTBL.js"
import { saveLS, getLS } from "./storage.js";
import { activities } from "./activity.js";



let activityHistory = getLS() ;
renderTable(activityHistory)

// Event listener for form submission
activityForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

// Function to handle the budget input enabling/disabling based on the hasBudget input
document.getElementById("budget").addEventListener("change", (e) => {
  const budgetInput = document.getElementById("budgetValue");
  if (e.target.value === "no") {
    budgetInput.disabled = true; // Disable the budget input if "no" is selected
  } else {
    budgetInput.disabled = false; // Enable the budget input if anything other than "no" is selected
    // budgetInput.value = "0"; // Set the budget value to 0 if "no" is selected
  }
});



  // Get values from the form
  const energyLvl = document.getElementById("energyLvl").value;
  const budgetValue = parseInt(document.getElementById("budgetValue").value);
  const location = document.getElementById("location").value;
  const budget = document.getElementById("budget").value; // Get the value of the budget selection



 
  

  // **Validation: Check if all required fields are filled**
  if (!energyLvl || !location) {
    errorMessageContainer.innerHTML = "Please fill out all required fields.";
    errorMessageContainer.style.color = "red"; 
    errorMessageContainer.style.display = "block";
    // alert("Please fill out all required fields.");
    return; // Stop form submission if there is an error
  }

  if (budget === "yes" && isNaN(budgetValue)) {
    errorMessageContainer.innerHTML = "Please select a budget value.";
    errorMessageContainer.style.display = "block";
    // alert("Please select a budget value.");
    return; // Stop form submission if the budget value is not selected when 'Yes' is chosen
  }

  // Call the activities function with the form inputs
  const newActivity = new activities(energyLvl, budgetValue, budgetValue, location);

  // Add the new activity to the history array
  activityHistory.push(newActivity);

  saveLS(activityHistory)


  // Display all activities from history
  renderTable(activityHistory);
  document.getElementById("activityForm").reset(); // Reset form after submission
});


  // document.getElementById("activityForm").reset();