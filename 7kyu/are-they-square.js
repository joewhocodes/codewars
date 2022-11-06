// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// array of nums, all pos, can be empty
// boolean
// ([1, 4, 9, 16, 25, 36]), true);
// [1, 2, 3, 4, 5, 6]), false);

const isSquare = arr => arr.length == 0 ? undefined : arr.map(e => Number.isInteger(Math.sqrt(e))).every(b => b);

console.log(isSquare([1, 4, 9, 16, 25, 36]))
console.log(isSquare([1, 2, 3, 4, 5, 6]))
console.log(isSquare([]))