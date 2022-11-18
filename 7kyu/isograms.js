// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// write funtion, takes in word, checks if word is isogram (no repeating letters)

// string, can be empty, special chars, obey casing
// boolean
//Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)


const isIsogram = w => w.toLowerCase().split('').map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e)).every(l => l);

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('aba'))
console.log(isIsogram('moOse'))