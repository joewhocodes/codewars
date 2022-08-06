const getGrade = (s1, s2, s3) => {
    const m = (s1 + s2 + s3) / 3;
    if (m >= 0 && m < 60) {
        return 'F';
    } else if (m >= 60 && m < 70) {
        return 'D';
    } else if (m >= 70 && m < 80) {
        return 'C';
    } else if (m >= 80 && m < 90) {
        return 'B';
    } else if (m >= 90 && m <= 100) {
        return 'A';
    }
};

console.log(getGrade(95, 90, 93), 'A');
