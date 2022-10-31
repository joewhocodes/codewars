// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// always string, never empty, special chars, ignore caps
//return string
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



const duplicateEncode = word => word.toLowerCase().split('').map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')').join('');

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('Supralapsarian'))
// '(())())' to equal ')())())'
// '(()))())())()(' to equal ')()))()))))()('