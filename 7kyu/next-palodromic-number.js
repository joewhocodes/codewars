// number, always above 10, always valid
// return number

const nextPal = val => {
    do {
        val++;
    } while (val !== +val.toString().split('').reverse().join(''));
    return val;
};

console.log(nextPal(11))