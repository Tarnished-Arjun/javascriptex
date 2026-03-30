let num1 = 10;
let num2 = 25;
let num3 = 15;

let greatest;

if (num1 >= num2 && num1 >= num3) {
    greatest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    greatest = num2;
} else {
    greatest = num3;
}

console.log("Greatest number is:", greatest);