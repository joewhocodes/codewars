// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.



const abbrevName = name => name.toUpperCase().split(" ").map(e => e.slice(0, 1)).join(".");

console.log(abbrevName("Sam Harris"), "S.H");