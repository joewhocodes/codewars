// checks if first argument is anagram of second argument - anagram contains all same letters
// always strings, never empty, no special chars, case insensitive
// return boolean

const isAnagram = (test, original) => test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('');

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("dumble", "bumble"))
