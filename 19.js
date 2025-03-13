function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    return sum;
  }
  
  // Test the function
  console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15
  console.log(sumArray([10, 20, 30]));     // Output: 60
  console.log(sumArray([]));               // Output: 0
  