const FORM = document.getElementById("form");
const output = document.getElementById("output");

function updateDOM(message, el) {
  const newEL = document.createElement(el);
  newEL.textContent = message;
  output.appendChild(newEL);
}

const startWorkout = (type, reps, time, fn) => {
  fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p");
  setTimeout(() => {
    fn(`Stop ${type}`, "h1");
  }, time * 1000);
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
