// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

pigIt = str => {
    const punctuation = '.,:!?';
    return str
        .split(' ')
        .map(e =>
            e.split('').filter(e => punctuation.includes(e)).join()
            ? e
            : e.substring(1) + e.substring(0, 1) + 'ay'
        )
        .join(' ');
};

console.log(pigIt('Hello world !'));
