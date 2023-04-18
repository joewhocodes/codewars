// write function, checks arg, if arg !== 6 then return the difference
// takes num, always positive,
// return num

const sixToast = n => {
    let result = n - 6;
    if (result < 0) {
        return result * -1;
    } else {
        return result;
    }
};

console.log(sixToast(6), 0);
console.log(sixToast(17), 11);
console.log(sixToast(3), 3);
