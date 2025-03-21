function reverseWords(sentence) {
    // Split, reverse, and join the words
    return sentence.split(' ').reverse().join(' ');
  }
  
  // Test the function
  console.log(reverseWords("Hello World"));          // Output: "World Hello"
  console.log(reverseWords("JavaScript is fun"));    // Output: "fun is JavaScript"
  console.log(reverseWords("Coding"));               // Output: "Coding"
  