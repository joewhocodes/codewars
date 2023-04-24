// two strings, return string with one of each present letter
// 2 strings, always valid, never empty, no special chars
// return string

const longest = (s1, s2) => Array.from(new Set(s1.concat(s2).split('').sort())).join('');

console.log(longest("aretheyhere", "yestheyarehere")); //aehrsty
// console.log(longest(("loopingisfunbutdangerous", "lessdangerousthancoding"))); //abcdefghilnoprstu
