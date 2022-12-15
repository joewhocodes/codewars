// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
// num, never empty, never negative, no special chars
// return number

const prevMultOfThree = n => {
    while (n >= 1) {
        if (n % 3 == 0) {
            return n;
        }
        n = Math.floor(n / 10);
    } 
    return null;
};


console.log(prevMultOfThree(25, null))
console.log(prevMultOfThree(1244, 12))
console.log(prevMultOfThree(36, 36))