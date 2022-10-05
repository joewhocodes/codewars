// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

const sortByLength = array => array.sort((a, b) => a.length - b.length);


console.log(sortByLength(["Beg", "Life", "I", "To"]))