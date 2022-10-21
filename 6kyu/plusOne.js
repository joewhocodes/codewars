// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

const upArray = arr => {
    if (arr.find(e => e < 0 || e > 9) || arr.length < 1) {
        return null;
    } else {
        for (let i = arr.length - 1; i > -1; i--) {
            if (arr[i] !== 9) {
                arr[i] = arr[i] + 1;
                break;
            } else {
                arr[i] = 0;
            }

            if (i === 0) {
                arr.unshift(1);
            }
        }
    }
    return arr;
};

console.log(upArray([2, 3, 9]));
console.log(upArray([2, 3, -9]));
console.log(upArray([4, 3, 2, 5]));