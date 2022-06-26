// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"


getMiddle = s => {
    const split = s.split("")
    const middle = Math.floor(split.length / 2)
    return s.length % 2 !== 0 ? split[middle] : split[middle - 1] + split[middle]
}

console.log(getMiddle("test"))