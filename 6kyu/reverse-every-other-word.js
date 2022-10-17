// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// always str, always 2 or more words, inc punc marks in word

// return str
// split map -> i -> if !i % 2 -> reverse join

const reverse = str => str.trim().split(" ").map((e, i) => i % 2 ? e.split("").reverse().join("") : e).join(" ");

console.log(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
console.log(reverse(""),"I yllaer don't ekil reversing !sgnirts")