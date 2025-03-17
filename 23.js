function isAnagram(str1, str2) {
    // Clean and sort the strings
    const cleanStr1 = str1.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    const cleanStr2 = str2.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    
    // Compare the sorted strings
    return cleanStr1 === cleanStr2;
  }
  
  // Test the function
  console.log(isAnagram("listen", "silent"));   // Output: true
  console.log(isAnagram("hello", "world"));     // Output: false
  console.log(isAnagram("anagram", "nagaram")); // Output: true
  