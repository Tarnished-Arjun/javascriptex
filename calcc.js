let num1 = 17;
let num2 = 5;
let operator = "+"; // change this to +, -, *, /

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Cannot divide by zero!";
        }
        break;

    default:
        result = "Invalid operator!";
}

console.log("Result:", result);