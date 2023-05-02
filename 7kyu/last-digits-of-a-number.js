// write function which returns last D digits of N number
// D is always positive, always num, N always number
// return array


const lastDigit = (n, d) => {
    const s = n.toString().split('');
    let e = d < s.length ? d : 0;
    return s.map(Number).slice(n.length - e);
};


console.log(lastDigit(123767,4),[3,7,6,7])
console.log(lastDigit(1343,5),[1,3,4,3])
