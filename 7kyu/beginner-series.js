// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

const getSum = (a, b) => {
    let numbers = [];
    if (a == b) {
        numbers.push(a);
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            numbers.push(i);
        }
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            numbers.push(i);
        }
    }
    return numbers.reduce((x, y) => x + y);
};




console.log(getSum(10, -1))
console.log(getSum(0,1))
// console.log(getSum(-318, -188))