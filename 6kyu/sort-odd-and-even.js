// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

function sortArray(array) {
    let oddIndex = [];
    let evenIndex = [];

    array
        .filter((e, i) => e % 2 && oddIndex.push(i))
        .sort((a, b) => a - b)
        .forEach((e, i) => (array[oddIndex[i]] = e));

    array
        .filter((e, i) => e % 2 == 0 && evenIndex.push(i))
        .sort((a, b) => a - b)
        .reverse()
        .forEach((e, i) => (array[evenIndex[i]] = e));

    return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
