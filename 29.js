function moveZeros(nums) {
    let pos = 0;
  
    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[pos] = nums[i];
        pos++;
      }
    }
  
    // Fill remaining positions with zeros
    while (pos < nums.length) {
      nums[pos] = 0;
      pos++;
    }
  
    return nums;
  }
  
  // Test cases
  console.log(moveZeros([0, 1, 0, 3, 12]));  // Output: [1, 3, 12, 0, 0]
  console.log(moveZeros([0, 0, 1]));         // Output: [1, 0, 0]
  console.log(moveZeros([2, 0, 4, 0, 5]));   // Output: [2, 4, 5, 0, 0]
  