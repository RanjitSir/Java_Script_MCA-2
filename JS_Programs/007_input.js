const prompt = require('prompt-sync')();

// Take two numbers as input
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

// Calculate the sum
let sum = number1 + number2;

// Print the result
console.log("The sum of " + number1 + " and " + number2 + " is " + sum);
