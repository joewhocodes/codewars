// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

//always str, no special chars, never empty, no nums
//return num

const maxCharacter = str => {
    let count = {};
    for (const l of str) {
        count[l] ? count[l]++ : count[l] = 1;
    }
    return Object.keys(count).sort((a, b) => -(count[a] - count[b]))[0];
};

console.log(maxCharacter('Hello World'))