// number, always pos, always 1-12, never empty

const quarterOf = (m) => {
    if (m > 0 && m < 4) {
        return 1;
    } else if (m > 3 && m < 7) {
        return 2;
    } else if (m > 6 && m < 10) {
        return 3;
    } else {
        return 4;
    }
};


console.log(quarterOf(8))