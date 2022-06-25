// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"



accum = s => {
    let newArr = [];
    for (let i = 0; i < s.length; i++) {
        const e = s.toLowerCase().split("")[i];
        newArr.push(e.toUpperCase() + (e.repeat(i)));
    };
    return newArr.join("-");
};


console.log(accum("ZpglnRxqenU"));