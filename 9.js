

// factorial problem


function findFactorial(number) {
    if (number === 0) return 1; // Base case

    return number * findFactorial(number - 1); // Multiply with recursive call
}

console.log(findFactorial(5)); // Output: 120
console.log(findFactorial(4))