// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:
// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

// string two words, special chars, nums, never empty,
// return string
// "not picking" --> "pot nicking"

const spoonerize = words => words.split(' ').map((e, i, a) => i === 0 ? a[1].slice(0, 1) + e.slice(1) : a[0].slice(0, 1) + e.slice(1)).join(' ');

console.log(spoonerize('not picking'))