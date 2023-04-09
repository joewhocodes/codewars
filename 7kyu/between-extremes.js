// write a function that caculates the difference between the biggest and smallest element of array
// array of nums, always valid, always positive
// return num
// 

// const betweenExtremes = n => {
//     const sorted = n.sort((a, b) => a - b);
//     return sorted[n.length - 1] - sorted[0];
// };

const betweenExtremes = n => Math.max(...n) - Math.min(...n);

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
console.log(betweenExtremes([-1, -41, -77, -100]), 99);
