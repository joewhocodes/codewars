//always array, length always > 3, always pos
// return num

const stray = n => {
    n.sort();
    return n[0] !== n[1] ? n[0] : n[n.length -1];
}

console.log(stray([1, 1, 2], 2))
console.log(stray([17, 17, 3, 17, 17, 17, 17], 3))

