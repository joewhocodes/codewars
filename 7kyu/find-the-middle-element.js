// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//takes array of nums, always integer, never empty, always 3 nums, always pos
//return integer


const gimme = t => t.indexOf([...t].sort((a, b) => a - b)[1]);

console.log(gimme([2, 3 ,1]))