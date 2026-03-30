const prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum of first " + n + " natural numbers is: " + sum);