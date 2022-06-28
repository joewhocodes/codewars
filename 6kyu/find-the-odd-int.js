// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

findOdd = A => {
    let counts = {};
    let result;
    for (const num of A) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    Object.entries(counts).map((e) =>
        e[1] % 2 !== 0 ? (result = e[0]) : null
    );
    return parseInt(result);
};

console.log(findOdd([1, 2, 2, 3, 9, 9, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
// console.log(findOdd(["b","b","b","a","a"]))
