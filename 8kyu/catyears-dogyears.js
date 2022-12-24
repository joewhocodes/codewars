// function with 1 argument, human years. Return value in dog / cat years
//return 3 numbers

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const humanYearsCatYearsDogYears = (hy) => {
    let cat = 15;
    let dog = 15;
    for (i = 1; i < hy; i++) {
        if (i == 1) {
            cat += 9;
            dog += 9;
        } else if (i > 1) {
            cat += 4;
            dog += 5;
        }
    }
    return [hy, cat, dog];
};


console.log(humanYearsCatYearsDogYears(1)) //(1, 15, 15)
console.log(humanYearsCatYearsDogYears(2)) //(2, 24, 24)
console.log(humanYearsCatYearsDogYears(10)) //(10, 56, 64)