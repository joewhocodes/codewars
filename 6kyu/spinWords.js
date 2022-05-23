function spinWords(string){
    //TODO Have fun :)
    const splitString = string.split(" ");
    const newString = [];
    splitString.forEach(word => {
        if (word.length < 5) {
            newString.push(word);
        } else {
            let splitWord = word.split("");
            let revWord = splitWord.reverse();
            let joinWord = revWord.join("");
            newString.push(joinWord);
        };
    });
    return newString.join(" ");
};
