function hasPairWithSum(arr, target) {
    let seen = new Set();

    for (let num of arr) {
        // Check if the complement (target - num) is in the set
        if (seen.has(target - num)) {
            return true;
        }
        // Store the current number
        seen.add(num);
    }

    return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 5], 8)); // Output: true (3 + 5)
console.log(hasPairWithSum([1, 2, 3, 4, 5], 10)); // Output: false
