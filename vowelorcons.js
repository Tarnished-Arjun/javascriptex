function checkChar(str, index) {
    let ch = str.charAt(index).toLowerCase();

    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        return "Vowel";
    } else if (ch >= "a" && ch <= "z") {
        return "Consonant";
    } else {
        return "Invalid character";
    }
}
console.log(checkChar("Hello", 4)); 
console.log(checkChar("World", 0)); 