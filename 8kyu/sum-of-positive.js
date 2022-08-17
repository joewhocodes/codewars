// You get an array of numbers, return the sum of all of the positives ones.



const positiveSum = arr => {
    let result = 0;
    arr.filter(a => a >= 0).forEach(e => {
        result += e;
    });
    return result;
};

console.log(positiveSum([1,-2,3,4,5]),13);