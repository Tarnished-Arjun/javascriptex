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
    alert(num + " is a Prime Number");
} else {
    alert(num + " is NOT a Prime Number");
}
