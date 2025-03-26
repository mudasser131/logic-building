function moveZerosToEnd(arr) {
    const nonZeroArr = [];
    let zeroCount = 0;
  
    // Separate non-zero elements and count zeros
    for (let num of arr) {
      if (num === 0) {
        zeroCount++;
      } else {
        nonZeroArr.push(num);
      }
    }
  
    // Add zeros at the end
    return nonZeroArr.concat(Array(zeroCount).fill(0));
  }
  
  // Test the function
  console.log(moveZerosToEnd([0, 1, 0, 3, 12]));     // Output: [1, 3, 12, 0, 0]
  console.log(moveZerosToEnd([0, 0, 5, 8, 0, 10]));  // Output: [5, 8, 10, 0, 0, 0]
  console.log(moveZerosToEnd([1, 2, 3, 4, 0]));      // Output: [1, 2, 3, 4, 0]
  