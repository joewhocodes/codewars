// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.



let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
alphabetPosition = text => (
    text
        .split(' ')
        .join('')
        .toLowerCase()
        .split('')
        .map(e => !alphabet.includes(e) ? null : alphabet.indexOf(e) + 1)
        .filter(Number)
        .join(' ')
)


console.log(alphabetPosition("The sunset sets at twelve o' clock."));