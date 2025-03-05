function findAllDuplicates(num) {
    let obj = {}; // Object to store occurrences
    let duplicates = []; // Array to store duplicate numbers

    for (let i = 0; i < num.length; i++) {
        if (obj[num[i]]) {
            if (!duplicates.includes(num[i])) {
                duplicates.push(num[i]); // Add duplicate if it's not already in the list
            }
        } else {
            obj[num[i]] = 1; // Mark the number as seen
        }
    }

    return duplicates.length > 0 ? duplicates : null; // Return duplicates or null if none found
}

console.log(findAllDuplicates([2, 3, 4, 2, 5, 3])); // Output: [2, 3]
console.log(findAllDuplicates([1, 5, 5, 6, 7, 8, 9, 1])); // Output: [5, 1]
console.log(findAllDuplicates([1, 2, 3, 4])); // Output: null (No duplicates)
