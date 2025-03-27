function firstNonRepeatingChar(str) {
    const charCount = {};
  
    // Count the frequency of each character
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first non-repeating character
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // Return null if no non-repeating character found
    return null;
  }
  
  // Test cases
  console.log(firstNonRepeatingChar("leetcode"));       // Output: "l"
  console.log(firstNonRepeatingChar("loveleetcode"));   // Output: "v"
  console.log(firstNonRepeatingChar("aabbcc"));         // Output: null
  