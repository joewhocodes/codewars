// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

const rpsls = (pl1, pl2) => {
    if (pl1 == pl2) {
        return 'Draw!';
    }
    const p1win = 'Player 1 Won!';
    const p2win = 'Player 2 Won!';
    switch (pl1) {
        case 'lizard':
            return pl2 == 'spock' || pl2 == 'paper' ? p1win : p2win;
        case 'spock':
            return pl2 == 'rock' || pl2 == 'scissors' ? p1win : p2win;
        case 'scissors':
            return pl2 == 'lizard' || pl2 == 'paper' ? p1win : p2win;
        case 'paper':
            return pl2 == 'rock' || pl2 == 'spock' ? p1win : p2win;
        case 'rock':
            return pl2 == 'lizard' || pl2 == 'scissors' ? p1win : p2win;
        default:
            break;
    }
};

console.log(rpsls('lizard', 'spock'));
