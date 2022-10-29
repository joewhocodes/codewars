// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// takes array of arrays, always nums, never empty, always at least 3 arrays
//return number
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].


const solve = arr => arr.map(e => [...new Set(e)].length).reduce((a, b) => a * b);

console.log(solve([[1,2],[4],[5,6]]))