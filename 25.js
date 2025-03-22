function findMissingNumber(arr) {
    // Find the expected sum using the formula
    const n = arr[arr.length - 1];
    const expectedSum = (n * (n + 1)) / 2;
  
    // Find the actual sum of the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
    // Return the missing number
    return expectedSum - actualSum;
  }
  
  // Test the function
  console.log(findMissingNumber([1, 2, 3, 5]));         // Output: 4
  console.log(findMissingNumber([10, 11, 12, 14, 15])); // Output: 13
  console.log(findMissingNumber([1, 3]));               // Output: 2
  