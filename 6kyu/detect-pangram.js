// always string, never empty, case irrelevant, ignore numbers & punctuation
// return boolean



const isPangram = string => [...new Set(string.toLowerCase().split('').sort())].join('').includes('abcdefghijklmnopqrstuvwxyz');

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('This is not a pangram.'));
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));