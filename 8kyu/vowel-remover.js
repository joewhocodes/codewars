// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// string, no nums, never empty, no special chars
// return str

const shortcut = s => s.split('').filter(e => !'aeiou'.includes(e)).join('');

console.log(shortcut('goodbye'))
console.log(shortcut('hello'))