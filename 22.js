function secondLargest(arr) {
    // Remove duplicates using Set and convert back to array
    const uniqueArr = [...new Set(arr)];
  
    // Check if there are at least two distinct elements
    if (uniqueArr.length < 2) {
      return "Array must have at least two distinct numbers.";
    }
  
    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);
  
    // Return the second largest number
    return uniqueArr[1];
  }
  
  // Test the function
  console.log(secondLargest([10, 5, 8, 20, 15])); // Output: 15
  console.log(secondLargest([3, 1, 4, 4, 5, 5])); // Output: 4
  console.log(secondLargest([7]));                // Output: "Array must have at least two distinct numbers."
  