// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

//PREP
// P always string, can be empty, no special chars, non case sensetive
// Return boolean
// Pseudo


const palindrome = string => {
    const newStr = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return newStr === newStr.split('').reverse().join('');
}

console.log(palindrome("Amore, Roma"));

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid