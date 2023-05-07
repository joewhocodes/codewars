// take string and determine if string is in alphabetical order
// string, always string, no speical chars, letters can appear twice,
// return boolean
//


const alphabetical = s => s === s.split('').sort().join('');

console.log(alphabetical('ant'), true);
console.log(alphabetical('kata'), false);