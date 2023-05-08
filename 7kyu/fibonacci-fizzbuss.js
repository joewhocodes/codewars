// write function , takes number, returns arr of nums with fuzzbuzz rules
// num, always pos, no special chars
// array

let result = [];
let count = 1;
// const fibsFizzBuzz = n => {
//     // let arr -> for20 -> push arr -> return arr
//     if (n < 1) {
//         return 0;
//     } else if (n <= 2) {
//         return 1;
//     }
//     return fibsFizzBuzz(n - 1) + fibsFizzBuzz(n - 2);
//     return result;
// };


function fibonacci(n) {
    result.unshift(n)
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
console.log(fibonacci(8))
console.log(result)


const fibsFizzBuzz = (n) => {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 2] + fib[i - 1])
    }
    for (let i = 0; i < fib.length; i++) {
        if (fib[i] % 15 == 0) fib[i] = 'FizzBuzz';
        if (fib[i] % 3 == 0) fib[i] = 'Fizz';
        if (fib[i] % 5 == 0) fib[i] = 'Buzz';
    }
    fib.shift();
    return fib;
};
    
// if (i % 15 === 0) {
//     result.push('Fizzbuzz');
// } else if (i % 5 === 0) {
//     result.push('Buzz');
// } else if (i % 3 === 0) {
//     result.push('Fizz');
// } else {
//     result.push(i);
// }


console.log(fibsFizzBuzz(20), [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"])