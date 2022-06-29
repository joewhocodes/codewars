// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

solution = (str, ending) => {
    let result;
    let length = str.length - 1;
    if (!ending) {
        return true;
    }
    for (var i = ending.length - 1; i >= 0; i--) {
        if (ending[i] == str[length]) {
            length--;
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
};
