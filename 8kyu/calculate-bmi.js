// write function that checks weight / height and returns string based on result

// number, always positive, sometimes float
// return string

const bmi = (w, h) => {
    const result = w / h ** 2;
    if (result <= 18.5) {
        return 'Underweight';
    } else if (result <= 25) {
        return 'Normal';
    } else if (result <= 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
};

console.log(bmi(80, 1.80, 'Normal'));
// console.log(bmi(27, 'Normal'));