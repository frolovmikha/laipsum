// Constants declaration
const DEFAULT_SORT_OP = 'min';

// Function that sorts an array of numbers based on a specified operation
function customSort(numbers, operation = DEFAULT_SORT_OP) {
    if (operation === 'min') {
        return numbers.sort((a, b) => a - b); // Sort in ascending order
    } else if (operation === 'max') {
        return numbers.sort((a, b) => b - a); // Sort in descending order
    } else {
        throw new Error('Unsupported operation: ' + operation);
    }
}

// Example usage:
const numbers = [5, 2, 9, 1, 5];
console.log(customSort(numbers)); // Output: [1, 2, 5, 5, 9]
