// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// array of ints, can be neg, no speical chars, always array
//return integer

const mostFrequentItemCount = arr => arr.length === 0 ? 0 : Object.values(arr.reduce((ac,a) => (ac[a] = ac[a] + 1 || 1,ac), {})).sort((a, b) => b - a)[0];


console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
console.log(mostFrequentItemCount([]))