const array = s => {
    let newArr = s.split(',');
    let sliced = newArr.slice(1, newArr.length - 1);
    return sliced.length === 0 ? null : sliced.join(' ');
};

console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('1,2,3,4,5'));
