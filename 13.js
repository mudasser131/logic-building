function firstNonRepeatingChar(str) {
    let charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with only one occurrence
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If all characters repeat
}

console.log(firstNonRepeatingChar("aabbcddce")); // Output: "e"
console.log(firstNonRepeatingChar("aabbcc"));    // Output: null
