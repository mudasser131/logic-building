// count the num of vowels in the word

function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;
    
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  // Test the function
  console.log(countVowels("hello woourld")); // Output: 3
  