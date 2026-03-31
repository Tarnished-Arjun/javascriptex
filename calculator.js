<<<<<<< HEAD
const prompt = require('prompt-sync')();
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
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
            result = "Cannot divide by zero";
        }
        break;

    default:
        result = "Invalid operaton";
}

console.log("Result: " + result);
=======
<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
</head>
<body>
<script>
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    let operator = prompt("Enter operator (+, -, *, /):");

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

    alert("Result: " + result);
</script>

</body>
</html>
>>>>>>> 1d5b9825c5884097690216b84344a120687a1409
