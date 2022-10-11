const isSortedAndHow = array => {
    const sorted = [...array].sort((a, b) => a - b);
    if (array.toString() === sorted.toString()) {
        return 'yes, ascending';
    } else if (array.toString() === sorted.reverse().toString()) {
        return 'yes, descending';
    } else {
        return 'no';
    }
};

console.log(isSortedAndHow([1, 2, 4]));
