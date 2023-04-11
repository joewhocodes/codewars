// write function, see if first/last letters of W = first/last letters of F
// 2 args, both strings, always valid, no nums, no special chars
// return boolean



const feast = (beast, dish) => beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) == dish.charAt(dish.length-1);

console.log(feast("great blue heron", "garlic naan", true));
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
