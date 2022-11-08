// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// string, never empty
// return string 'name + plays banjo'

const areYouPlayingBanjo = name => name.toLowerCase().charAt(0) == 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Paul'))
console.log(areYouPlayingBanjo('Ringo'))
console.log(areYouPlayingBanjo('rolf'))