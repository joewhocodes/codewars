// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// array, can be empty, always contains numbers, numbers always floats, never negative
// number
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// sort -> slice -> reduce

const sumArray = array => array == null || array == [] ? 0 : array.sort((a, b) => a - b).slice(1, array.length-1).reduce((a, b) => a + b, 0);

console.log(sumArray([ 6, 2, 1, 8, 10 ], 16))
console.log(sumArray([ 1, 1, 11, 2, 3 ], 6))