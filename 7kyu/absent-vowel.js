// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.

// always string, always valid
//return number


const vowels = ['a', 'e', 'i', 'o', 'u'];
const absentVowel = x => vowels.map(v => x.indexOf(v)).indexOf(-1);

console.log(absentVowel("John Doe hs seven red pples under his bsket"))