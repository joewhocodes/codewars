// write function takes 2 integers, and return an array containing all numbers between and including the integers
// 2 integers, never floats, can be negative, first number lower than 2nd
// array
// 

const between = (a, b) => {
    let result = [];
    for (i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);