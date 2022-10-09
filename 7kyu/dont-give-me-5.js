// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

const dontGiveMeFive = (start, end) => {
    let count = [];
    for (let i = start; i <= end; i++) {
        if (!Array.from(String(i)).includes('5')) {
            count.push(i);
        }
    }
    return count.length;
};

console.log(dontGiveMeFive(1, 9));
