// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Descends one at a time until reaching the minimum
// repeat until the string is the appropriate length

const ascendDescend = (length, minimum, maximum) => {
    let result = '';
    for (let i = minimum; i <= maximum; i++) {
        result += i;
    }
    for (let i = maximum - 1; i > minimum; i--) {
        result += i;
    }
    return result.repeat(length).substring(0, length);
};

console.log(ascendDescend(5, 1, 3), "12321")
console.log(ascendDescend(14, 0, 2), "01210121012101") 