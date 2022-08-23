// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    return (this == this.toUpperCase())
}  


// isUpperCase = function(a) {
//     return a == a.toUpperCase() ? true : false
// }

console.log("aUWEJF".isUpperCase())