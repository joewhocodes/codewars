// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// always string, never empty, no special chars

const magazine =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ransomNote = (note, mag) => {
    // for loop, mag !includes word return false,
    // for loop, index of word == -1 ? return false, slice indexOf.
    const words = note.split(' ')
    for (let i = 0; i < words.length; i++) {
        let index = magazine.indexOf(words[i])
        if (index == -1) {
            return false
        } else {
            (magazine.replace('in', ''))
        }
    }
    return true;
}

console.log(ransomNote("sit ad est sint", magazine, true))
console.log(ransomNote("sit ad est love", magazine, false))
console.log(ransomNote("sit ad est sint in in", magazine, true))
console.log(ransomNote("sit ad est sint in in in in", magazine, false))