// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// array of nums - never empty, no special chars, no negatives
// return array
//  [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]



function sortArray(arr) {
    const odd = arr.filter((e, i, a) => e % 2 !== 0).sort((a, b) => a - b);
    return arr.map(x => x % 2 ? odd.shift() : x);
}

console.log(sortArray([5, 8, 6, 3, 4]))