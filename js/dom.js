const prompt  = require ("prompt-sync")();
prompt("What is the name of the project");

// function Test (username, password) {
//     if (!username || !password) {
//         console.log("Please enter a username and password")
//     }

//     else if (username === "Ethiopia" || password === "ethiopia") {
//         console.log("Welcome to Ethiopia")
// }

// else {
//     console.log("Error")
// }
// }

// Test(5, "ethiopia");


function Difference () {
    return a - b;
}
function Multiply () {
    return a * b;
}
function Divide () {
    return a / b;
}
function Modulo () {
    return a % b;
}
function Calculator (a, b, op) {
    function Sum (a, b) {
        return a + b;
    }
    if (op == "+") {
        return Sum (a, b);
    }
}


console.log(Calculator(5, 3, "+"));