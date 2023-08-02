const prompt = require("prompt-sync")();

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");


let sum = parseFloat(num1) + parseFloat(num2);
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;


console.log(`The sum is ${sum}`);
console.log(`The difference is ${difference}`);
console.log(`The product is ${product}`);
console.log(`The quotient is ${quotient}`);
console.log(`The remainder is ${remainder}`);
