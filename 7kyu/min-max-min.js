// function, return min return max, return int between min/max
// always array of ints, can be pos/neg, always valid, nums always different

const minMinMax = arr => {
    let result = [];
    arr.sort((a, b) => a - b)
    result.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] - 1) {
            result.push(arr[i] + 1);
            break;
        }
    }
    result.push(arr[arr.length - 1]);
    return result;
}; 

console.log(minMinMax([-1, 4, 5, -23, 24])); //[-23, -22, 24]
console.log(minMinMax([1, 3, -3, -2, 8, -1])); //[-3, 0, 8]
console.log(minMinMax([2, -4, 8, -5, 9, 7])) // [-5, -3, 9];
console.log(minMinMax([
-4,  6, -9, 0, -9, 9, -8,  2, 8, 18])) // [-5, -3, 9];