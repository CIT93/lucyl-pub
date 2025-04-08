const FORM = document.getElementById("form");
const OUT = document.getElementById("output");

const updateDOM = (message, el = "h3") => {
  const newEL = document.createElement(el);
  newEL.textContent = message;
  OUT.appendChild(newEL);
}

function clearOutput() {
  output.innerHTML = "";
}

const startWorkout = (type, reps, time,fn) => {
  fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p");
  return new Promise((resolve, reject) => {
    if (time ===0) {
      reject(`Error in Time selection`);
    } else {
    setTimeout(() => {
      resolve(`Stop ${type}`);
    }, time * 1000);
  }
  });
};

const onError = (error) => {
  updateDOM(error, "h2")
}

FORM.addEventListener("submit", e => {
  e.preventDefault();
  const type = e.target.type.value;
  const reps = parseFloat(e.target.reps.value);
  const time = parseFloat(e.target.time.value);
  startWorkout(type, reps, time, updateDOM)
  .then(updateDOM)
  .catch(onError)
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
