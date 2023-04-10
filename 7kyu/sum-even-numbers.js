// write function takes array, return sum of even integer values
// always array of nums, can be negative, can be floats
// return number
//

const sumEvenNumbers = arr => {
    let result = 0;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result += arr[i];
        }
    }
    return result;
};


console.log(sumEvenNumbers([14, 5, 6, 7, 8, 9, 10]));
// console.log(sumEvenNumbers([1337,374,849,22.5,19,16,0,0,16,32]), 30);