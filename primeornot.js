<<<<<<< HEAD
const prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number:"));
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is NOT a Prime Number");
}
=======
<!DOCTYPE html>
<html>
<head>
    <title>Prime Number Check</title>
</head>
<body>
<script>
    let num = Number(prompt("Enter a number:"));
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        alert(num + " is a Prime Number");
    } else {
        alert(num + " is NOT a Prime Number");
    }
</script>
</body>
</html>
>>>>>>> 1d5b9825c5884097690216b84344a120687a1409
