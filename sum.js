<<<<<<< HEAD
const prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum of first " + n + " natural numbers is: " + sum);
=======
<!DOCTYPE html>
<html>
<head>
    <title>Sum of n Natural Numbers</title>
</head>
<body>
<script>
    let n = Number(prompt("Enter a number:"));

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    alert("Sum of first" + n + " natural numbers is:" + sum);
</script>

</body>
</html>
>>>>>>> 1d5b9825c5884097690216b84344a120687a1409
