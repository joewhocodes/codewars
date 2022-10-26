// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// take array of nums, 2 numbers will occur once, rest will occur twice. Need to find the 2 nums that occur once, add them together and return the sum.

// always array of nums. never empty. always positive. always follows rules.
//return num
//



const repeats =arr => arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((a, b) => a + b);

console.log(repeats([4,5,7,5,4,8]));