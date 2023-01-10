// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
// Consonants are letters used in English other than "a", "e", "i", "o", "u".
// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.
// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

// always string, only count consonants, case insensitive
// return number
// add -> 1, Dad, 1
// "abcdefghijklmnopqrstuvwxyz" ==> 21

const countConsonants = (str) => {
    obj = {};
    const newStr = str
        .toLowerCase()
        .split('')
        .filter((e) => !'aeiou1234567890! '.includes(e))
        .join('');
    for (l of newStr) {
        obj[l] ? obj[l]++ : (obj[l] = 1);
    }
    return Object.values(obj).length;
};

console.log(countConsonants('add', 1))
console.log(countConsonants('Dad', 1))
console.log(countConsonants('sillystring', 7))
console.log(countConsonants('abcdefghijklmnopqrstuvwxyz', 21))
console.log(countConsonants('Count my unique consonants!!', 7))

