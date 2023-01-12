// function that removes words from another array
// return array of strings
//

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const gooseFilter = birds => birds.filter(e => !geese.includes(e));

console.log(gooseFilter( ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))