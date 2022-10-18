// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Create a function that accepts a string, removes underscores/hyphens and coverts to camel case (capitalising the first letter of each word EXCEPT the first word) - if original string was pascal case, keep the first letter capitalised

// always str, always underscore/hyphen seperated, no special chars, never empty

//return str

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// split -> map -> is index(0) uppercase? -> charAt0 toUppercase -> join -> replace 

const toCamelCase = str => str.split(/-|_/).map((e, i) => (i == 0 ? e.charAt(0) : e.charAt(0).toUpperCase()) + e.slice(1)).join('');

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_stealth_warrior"));
