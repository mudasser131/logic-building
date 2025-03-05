function findDuplicate(num) {
    let obj = {}; // Object to store occurrences

    for (let i = 0; i < num.length; i++) {
        if (obj[num[i]]) {
            return num[i]; // Return the first duplicate found
        } else {
            obj[num[i]] = 1; // Mark the number as seen
        }
    }

    return null; // Fix: Explicitly return null if no duplicate is found
}

console.log(findDuplicate([1, 5, 6, 7, 8, 9])); // Output: null (No duplicate)
console.log(findDuplicate([1, 5, 5, 6, 7, 8, 9, 1])); // Output: 5 (First duplicate found)
console.log(findDuplicate([])); // Output: null (Empty array case)
