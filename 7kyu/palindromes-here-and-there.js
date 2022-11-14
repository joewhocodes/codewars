// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

// For example:

// array of nums, alwys pos, no special chars, never empty, single digits count
// return array of nums, same order, replaced with binary
// [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
// [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

const convertPalindromes = n => n.map(e => e == e.toString().split('').reverse().join('') ? 1 : 0);

console.log(convertPalindromes([101, 2, 85, 33, 14014]))
console.log(convertPalindromes([45, 21, 303, 56]))