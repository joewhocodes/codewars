// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

const removeSmallest = (numbers) => {
    const newArr = numbers.slice(0);
    let smallest = numbers.indexOf(Math.min(...numbers));
    newArr.splice(smallest, 1);
    return newArr;
};

console.log(removeSmallest([5, 3, 2, 1, 4]));
