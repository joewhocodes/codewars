// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
// array of nums, never empty, always pos, at least 1 pair
// return nums

const twoSum = (array, sum) => {
    let pairs = [];
    let obj = {};
    for (const n of array) {
        if (obj[sum - n]) {
            pairs.push([n, sum - n]);
        }
        obj[n] ? obj[n]++ : (obj[n] = 1);
    }
    return pairs.length;
};

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);