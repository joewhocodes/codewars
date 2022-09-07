// Your task is to write a function maskify, which changes all but the last four characters into '#'.


// return masked string

const maskify = cc => cc.length < 4 ? cc : cc.split("").fill("#", 0, cc.length-4).join("");


console.log(maskify('24316'));