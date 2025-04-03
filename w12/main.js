const FORM = document.getElementById("form");
const output = document.getElementById("output");

function getFit() {
    const heading = document.createElement("p")
    heading.textContent = "Submit to start!"
    output.appendChild(heading)

    FORM.addEventListener('submit', (e) => {
        e.preventDefault();  

        const exerciseType = document.getElementById('exercise').value;  
        const numberReps = document.getElementById('reps').value;
        const timeSet = document.getElementById('time').value;

        const outputMessage = document.createElement('p');
        outputMessage.textContent = `Start ${exerciseType} < > Goal rep is ${numberReps}`;
        output.appendChild(outputMessage);

        setTimeout(() => {
           const timeout = document.createElement('p')
           timeout.textContent = `Stop doing ${exerciseType}`
           output.appendChild(timeout);
        }, 3000);
    });
}
getFit()