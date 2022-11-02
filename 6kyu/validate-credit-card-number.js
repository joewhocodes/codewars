// In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

//positive integer, up to 16 digits
//return boolean
// split -> map -> n.length % 2 -> map odd indexs


const validate = n => {
    return String(n)
        .split('')
        .map((e, i, a) =>
            a.length % 2 ? 
                (i%2 ? (e*2 > 9 ? e*2-9 : e*2) : e) 
            : 
                (!(i%2) ? (e*2 > 9 ? e*2-9 : e*2) : e))
        .reduce((a, b) => 
            parseInt(a) + parseInt(b))
        % 10  ? false : true;
}

console.log(validate(1714), false);
console.log(validate(12345), false);
console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
console.log(validate(1990));