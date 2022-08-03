// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

const wordsToMarks = string => {
    let result = 0
    for (const i of string.split("")) {
        result += parseInt(i, 36) - 9; 
    }
    return result
}

console.log(wordsToMarks('attitude'), 100);
