const createPhoneNumber = n => {
    n.splice(0, 0, "(");
    n.splice(4, 0, ") ");
    n.splice(8, 0, "-");
    return n.join("");
};


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// => returns "(123) 456-7890"