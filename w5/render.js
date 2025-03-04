export function renderMovies(movieArr) {
    const output = document.getElementById("output");
    if (!output) return;
  
    const table = document.createElement("table");
    table.border = "1";
    

    const h1 = document.createElement("h1");
    h1.textContent = `What should I watch`
    table.appendChild(h1);
  
    const tbody = document.createElement("tbody");
    
    movieArr.forEach(({ title, year, Rating, watched }) => {
      if (parseInt(Rating) >= 6 || parseInt(watched) <= 5) {
        const row = document.createElement("tr");
  
        [title, year, Rating, watched].forEach(value => {
          const td = document.createElement("td");
          td.textContent = value;
          row.appendChild(td);
        });
  
        tbody.appendChild(row);
      }
    });
  
    table.appendChild(tbody);
    output.appendChild(table);
  }