// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

// string of words, no numbers, never empty, no special chars
// string


const removeConsecutiveDuplicates = (s) => s.split(' ').filter((_, i, a) => a[i] !== a[i+1]).join('');

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))