const solve = arr => Array.from(new Set(arr.reverse())).reverse();

console.log(solve([3,4,4,3,6,3]));
