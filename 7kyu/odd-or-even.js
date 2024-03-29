// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

const oddOrEven = array => {
    if (array.length == 0) {
        return [0];
    } else {
        return array.reduce((a, b) => a + b) % 2 == 0 ? 'even' : 'odd';
    }
};

console.log(oddOrEven([0, 1, 4]))