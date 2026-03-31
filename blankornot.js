function isBlank(str) {
    if (str.trim().length === 0) {
        return "String is blank";
    } else {
        return "String is not blank";
    }
}
console.log(isBlank("   "));
console.log(isBlank("Hello"));