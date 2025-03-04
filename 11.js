function longestConsecutiveSequence(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // Output: 4 (1, 2, 3, 4)
console.log(longestConsecutiveSequence([9, 1, 4, 7, 3, 2, 6, 8, 0])); // Output: 6 (0, 1, 2, 3, 4, 6)
