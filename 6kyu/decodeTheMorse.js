decodeMorse = function (morseCode) {
    let newMorse = morseCode.split(' ');
    let words = [];
    newMorse.forEach(e => {
        words.push(e ? MORSE_CODE[e] : " ");
    });
    return words.join("")
};


decodeMorse('.... . -.--   .--- ..- -.. .')