//  volume, side, always positive, always valid 
// boolean 
// -1, 2 false, 8, 2 true

const cubeChecker = (v, s) => v + s <= 0 ? false : s ** 3 == v;

console.log(cubeChecker(-1, 2))
console.log(cubeChecker(8, 2))