function firstNonRepeatingChar(str) {
    const charCount = {};
  
    // Count occurrences of each character
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first character with count 1
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // Return null if no non-repeating character is found
    return null;
  }
  
  // Test the function
  console.log(firstNonRepeatingChar("hello"));      // Output: "h"
  console.log(firstNonRepeatingChar("aabbcc"));     // Output: null
  console.log(firstNonRepeatingChar("javascript")); // Output: "j"
  