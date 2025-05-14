import { saveLS } from "./storage.js";
import { output } from "./global.js";
const renderTableHeader = () => {
    const table = document.createElement("table");
    table.setAttribute("border", "1");
  
    //creates the table head and row
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headers = ["Name", "Description", "Energy Level", "Budget", "Location", "Action"];
  
    headers.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
  
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  };
  

  function renderActionButtons(activity, index, data) {
    const td = document.createElement("td");
  
    // --- Create Edit Button ---
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      document.getElementById("energyLvl").value = activity.energyLvl;
      document.getElementById("location").value = activity.location;
      document.getElementById("budget").value = activity.budget > 0 ? "yes" : "no";
      document.getElementById("budgetValue").value = activity.budget;
      data.splice(index, 1);
      saveLS(data)
      renderTable(data);
    });

 

  // --- Create Delete Button ---
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
      data.splice(index, 1);      // Remove activity from array
      localStorage.setItem("activity", JSON.stringify(data)); // Update local storage
      saveLS(data)
      renderTable(data);          // Re-render table
    
  });


  
    td.appendChild(editBtn);
    td.appendChild(deleteBtn);
    return td;
  };
  
  const renderTableBody = (data) => {
    const tbody = document.createElement("tbody");
  
    data.forEach((activity, index) => {
      const tr = document.createElement("tr");
      const budgetAmt = isNaN(activity.budget) ? "No budget" : activity.budget;
  
      const fields = [
        activity.dataDescription.name,
        activity.dataDescription.description,
        activity.energyLvl,
        budgetAmt,
        activity.location,
      ];
  
      fields.forEach((text) => {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
      });
  
      const actionTd = renderActionButtons(activity, index, data);
      tr.appendChild(actionTd);
  
      tbody.appendChild(tr);
    });
  
    return tbody;
  };
  
  const renderTable = (data) => {
    output.innerHTML = "<h3>Suggested Activities:</h3>";
  
    if (data.length === 0) return;
  
    const table = renderTableHeader();
    const tbody = renderTableBody(data);
    table.appendChild(tbody);
    output.appendChild(table);
  };

  
  async function start() {
    try {
      const data = await fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast')
      const result = await data.json()
      const forecast = result.properties.periods[1].shortForecast
      const temp = result.properties.periods[0].temperature
      const tempUnit = result.properties.periods[0].temperatureUnit

      
      document.getElementById("weather-heading").textContent = `Weather Forecast for Fresno: ${forecast}, ${temp} ${tempUnit}`
    } catch(e) {
        document.getElementById("weather-heading").textContent = 'Error fetching weather data'
      }
    
  }
  


start()

export {renderTable}