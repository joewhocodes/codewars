// num, no negative, no special chars
// return string


const countSheep = num => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += `${i + 1} sheep...`;
    }
    return result;
};

console.log(countSheep(3));
console.log(countSheep(2));
console.log(countSheep(1));