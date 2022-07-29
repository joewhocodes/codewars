// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.


const binaryArrayToNumber = arr => {
    let binary = 0;
    arr.reverse().map((e, i) => e ? binary *= i : 0)
    return binary
};

console.log(binaryArrayToNumber([0,0,0,1]));
console.log(binaryArrayToNumber([0,0,1,0]));
console.log(binaryArrayToNumber([1,1,1,1]));