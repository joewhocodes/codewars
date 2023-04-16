// takes string, never empty, no special chars
// returns string
// 

const updateLight = w => {
    if (w == 'green') {
        return 'yellow';
    } else if (w == 'yellow') {
        return 'red';
    } else {
        return 'green';
    }
};

console.log(updateLight('green'))
console.log(updateLight('yellow'))