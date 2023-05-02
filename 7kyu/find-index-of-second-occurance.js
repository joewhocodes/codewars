// function, finds the index of 2nd occurance of string, if no match return -1
// String, inc special chars
// return num

const secondSymbol = (str, sym) => str.indexOf(sym, str.indexOf(sym) + 1);

console.log(secondSymbol('Hello world!!!','l'), 3);
console.log(secondSymbol('Hello world!!!','A'), -1);