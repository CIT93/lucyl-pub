const FORM = document.getElementById("form");
const output = document.getElementById("output");

function updateDOM(message, el) {
  const newEL = document.createElement(el);
  newEL.textContent = message;
  output.appendChild(newEL);
}
function clearOutput() {
  output.innerHTML = "";
}

const startWorkout = (type, reps, time) => {
  return new Promise((resolve, reject) => {
    if (!type) {
      reject("Type of exercise is required.");
    } else if (reps <= 0 || time <= 0) {
      reject("Reps and time must be greater than 0.");
    }
    updateDOM(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p");
    setTimeout(() => {
      resolve(`Stop ${type}`);
    }, time * 1000);
  });
};

FORM.addEventListener("submit", e => {
  e.preventDefault();
  const type = e.target.type.value;
  const reps = parseFloat(e.target.reps.value);
  const time = parseFloat(e.target.time.value);
  startWorkout(type, reps, time, updateDOM);
  FORM.reset();
});

// function getFit() {
//     const heading = document.createElement("p")
//     heading.textContent = "Submit to start!"
//     output.appendChild(heading)

//     FORM.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const exerciseType = document.getElementById('exercise').value;
//         const numberReps = document.getElementById('reps').value;
//         const timeSet = document.getElementById('time').value;

//         const outputMessage = document.createElement('p');
//         outputMessage.textContent = `Start ${exerciseType} < > Goal rep is ${numberReps}`;
//         output.appendChild(outputMessage);

//         setTimeout(() => {
//            const timeout = document.createElement('p')
//            timeout.textContent = `Stop doing ${exerciseType}`
//            output.appendChild(timeout);
//         }, 3000);
//     });
// }
// getFit()
