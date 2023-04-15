// array on nums and single num, not negative, always nums, no special chars
// return array of nums 
// 

const divisibleBy = (n, d) => {
    let result = [];
    for (i = 0; i < n.length; i++) {
        n[i] % d == 0 ? result.push(n[i]) : null;
    }
    return result;
};

console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6])