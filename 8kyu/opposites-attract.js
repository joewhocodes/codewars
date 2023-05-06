const lovefunc = (f1, f2) => (f1 + f2) / 2 % 1 !== 0

console.log(lovefunc(1, 4))
console.log(lovefunc(2, 2))
console.log(lovefunc(0, 1))
console.log(lovefunc(0, 0))