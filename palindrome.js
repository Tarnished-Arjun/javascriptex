function isPalindrome(str) {
    let len = str.length;
    let flag = true;

    for (let i = 0; i < len / 2; i++) {
        if (str.charAt(i) !== str.charAt(len - 1 - i)) {
            flag = false;
            break;
        }
    }

    if (flag) {
        return "Palindrome";
    } else {
        return "Not a palindrome";
    }
}

// Example
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));