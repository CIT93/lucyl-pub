console.log("hello from inside the main.js file");

//let myVar;

const myVar = "Lucy";
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);



function runNOW () {
    if(myVarType === "number") {
        console.log(`will 11 this one run?`);
    } else {
        console.log(`will 13 this one run?`);
    }
}


runNOW();
runNOW();