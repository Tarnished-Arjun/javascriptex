function decimalToBinary(num) {
    let binary = "";

    while (num > 0) {
        let rem = num % 2;
        binary = rem + binary;
        num = Math.floor(num / 2);
    }

    return binary || "0";
}
console.log(decimalToBinary(45));