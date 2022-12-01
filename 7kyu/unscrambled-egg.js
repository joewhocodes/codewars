// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// string, no special chars, case insensitive
// return string

const unscrambleEggs = word => word.replace(/egg/g, '');


console.log(unscrambleEggs('ceggodegge heggeregge'))