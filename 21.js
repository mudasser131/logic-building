function isPalindrome(str) {
    const cleanStr = str.toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  // Test the function
  console.log(isPalindrome("madam"));    // Output: true
  console.log(isPalindrome("hello"));    // Output: false
  console.log(isPalindrome("racecar"));  // Output: true
  