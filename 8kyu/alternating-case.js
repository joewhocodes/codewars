// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language;)
// Takes string, turns LC into UC and vice versa

//always string, never empty, nums and special chars ok, 
// Return String
// "hello world" -> "HELLO WORLD"
// "HeLLo WoRLD" -> "hEllO wOrld"

String.prototype.toAlternatingCase = function () {
    // split > map > if = uppercase , lowercase, uppercase
    return this.split('').map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
}

console.log("hello world".toAlternatingCase())
console.log("HeLLo WoRLD".toAlternatingCase())