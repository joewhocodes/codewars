// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise

// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise

// function, take in 2 args. 1 str, 2nd arr.

// check weather array contains all possilbe rotations of str.

// hello ohell lohel llohe elloh hello

//strng - always str, no spcial, never empty, no space,
//arr - arr, always arr, always con string, random elements

//return boolean value

//str "hello", arr [hello ohell lohel llohe elloh] -> true
//str "world", arr [world dworl ldwor rldwo orldw] -> true

// let allRots = [];
// strng -> split map, pop unshift, push
// allRots -> every -> arr

const containAllRots = (strng, arr) => {
    let allRots = [];
    let splitStr = strng.split('');
    for (i = 0; i < strng.length; i++) {
        const end = splitStr.pop();
        splitStr.unshift(end);
        const shiftedWord = [...splitStr];
        allRots.push(shiftedWord.join(''));
    }
    return allRots.every(e => arr.includes(e));
};

console.log(
    containAllRots('hello', ['ohell', 'lohel', 'llohe', 'elloh', 'hello'])
);
