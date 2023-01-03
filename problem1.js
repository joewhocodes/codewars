// write 3 functions that compute the sum of the numbers in a given list using
// for-loop
// while-loop
// recursion

const problem1a = (n) => {
    let result = 0;
    for (i = 0; i < n.length; i++) {
        result += n[i];
    }
    return result;
};

const problem1b = (n) => {
    let result = 0;
    let count = n.length;
    while (count > 0) {
        count--;
        result += n[count];
    }
    return result;
};

let result = 0;
const problem1c = (n) => {
    if (n.length == 0) return;
    result += n[0];
    n.shift()
    problem1c(n)
    return result
};

console.log(problem1c([1, 2, 3, 5, 7]))

