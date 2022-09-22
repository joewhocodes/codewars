// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

const countPositivesSumNegatives = input => {
    if (input == 0 || input == null) {
        return [];
    } else {
        let result = [0, 0];
        input.map(e => (e > 0 ? result[0]++ : (result[1] += e)));
        return result;
    }
}


console.log(countPositivesSumNegatives([]));