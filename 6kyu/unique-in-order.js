// string or array. never empty

// return an array, each elements one character, preserve original order of elements

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = iterable => {
    let result = [];
    for (let i = 0; i < iterable.length; i++) {
        iterable[i] !== iterable[i+1] ? result.push(iterable[i]) : null
    }
    // Other solution
    // Array.from(iterable).map((e, i) => e !== iterable[i + 1] ? result.push(e) : null)
    // return [...iterable].filter((e, i) => e !== iterable[i + 1])
    return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1,2,2,3,3]))

