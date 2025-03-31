function rotate(nums, k) {
    let n = nums.length;
    k = k % n;
  
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
  
    return nums;
  }
  
  // Helper function to reverse part of the array
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  // Test cases
  console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));  // Output: [5, 6, 7, 1, 2, 3, 4]
  console.log(rotate([-1, -100, 3, 99], 2));     // Output: [3, 99, -1, -100]
  console.log(rotate([1, 2], 5));                // Output: [2, 1]
  