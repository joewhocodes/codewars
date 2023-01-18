// 2 nums, never neg, always nums
// return num


const mango = (q, p) => q < 3 ? q * p : Math.ceil(q - q / 3) * p;

// console.log(mango(3, 3)); 
// console.log(mango(9, 5)); 
console.log(mango(2, 3)); 
console.log(mango(31, 20)); 