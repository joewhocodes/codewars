// array of (arrays of nums), add first num, subtract second num 
// return integer 

const number = stops => {
    result = 0;
    for (let i = 0; i < stops.length; i++) {
        result += stops[i][0];
        result -= stops[i][1];
    }
    return result;
};


console.log(number([[10,0],[3,5],[5,8]]),5)