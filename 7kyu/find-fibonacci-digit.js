// As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.

// always integer, never empty, no special chars, always positive
// return number 
// 

const getLastDigit = n => {
    let [a, b] = [0, 1];
    for (let i = 0; i <= n; i++) {
        [a, b] = [b, (a+b) % 10]
    }
    return a;
}


console.log(getLastDigit(15));
console.log(getLastDigit(193150), 5);
// console.log(getLastDigit(300), 0);
// console.log(getLastDigit(20001), 6);