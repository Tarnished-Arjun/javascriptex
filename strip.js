function stripChars(str, removeChars) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);

        if (!removeChars.includes(ch)) {
            result = result + ch;
        }
    }

    return result;
}

console.log(stripChars("hello world", "ol"));