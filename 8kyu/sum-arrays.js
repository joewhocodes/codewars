// write function sums all numbers of a given array
// array of nums, can be negative, can be float, can be empty
// return num

const sum = n => n.reduce((a, b) => a + b, 0);

console.log(sum(([1, 5.2, 4, 0, -1]), 9.2))