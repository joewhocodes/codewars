// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// let games = [
//     { id: 1, name: 'Star Wars: Imperial Assault', company: "fart", votes: 3},
//     { id: 2, name: 'Game of Thrones: Second Edition', company: 'Fantassy Flight', votes: 4 },
//     { id: 3, name: 'Merchans and Marauders', company: 'Z-Man Gaming', votes: 5 },
//     { id: 4, name: 'Eclipse', company: 'Lautapelit', available: false, votes: 6 },
//     { id: 5, name: 'Fure of Dracula', company: 'Fantasy Flight', available: true, votes: 2 }
// ]
// let maxGame = games.reduce((max, game) => max.votes > game.votes ? max : game);

// console.log(maxGame)



const high = x => {
    let scores = [];
    for (const word of x.split(' ')) {
        let wordScore = 0;
        for (const l of word.split('')) {
            wordScore += parseInt(l, 36) - 9;
        }
        scores.push({ word: word, score: wordScore });
    }
    return scores.reduce((max, s) => max.score >= s.score ? max : s).word;
};

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'))