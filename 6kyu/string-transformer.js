// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

// function takes string, changes case of every char, reverse order of words
// string, multiple spaces, no special chars, no nums
// return string

const stringTransformer = s => s.split(' ').map(w => w.split('').map(l => l == l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')).reverse().join(' ');



console.log(stringTransformer("Example Input", "iNPUT eXAMPLE"))