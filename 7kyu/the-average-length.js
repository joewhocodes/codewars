// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

//array of strings, never empty, always more than 1

const averageLength = a => { 
    const average = Math.round(a.map(e => e.length).reduce((a, b) => a + b) / a .length);
    return a.map(x => x.slice(0, 1).repeat(average))
}


console.log(averageLength(['aa', 'bbb', 'cccc']))