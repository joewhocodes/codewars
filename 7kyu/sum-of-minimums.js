// array of arrays, inner arrays contain nums, sum lowest num of all separate arrays
// always an array of arrays, always nums, never negative, always valid, no duplicates
// return num


const sumOfMinimums = arr => arr.map(e => e.sort((a, b) => a - b).slice(0, 1)).reduce((a, b) => Number(a) + Number(b));

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])) //9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])) //76

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]