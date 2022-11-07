// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"

// always string, AEIOU, special chars, never empty, leave existing uppercase
// string
// "Hello World!" -> "HEllO WOrld!"
// "How's it going?" -> 'HOw's It gOIng?'

const swap = string => string.split('').map(e => 'aeiou'.includes(e) ? e.toUpperCase() : e).join('');
// const swap = string => string.replace(/[aeiou]/g, v => v.toUpperCase())

console.log(swap("Hello World!"))
console.log(swap("How's it going?"))