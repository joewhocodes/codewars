const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((a, b) => a + b) / classPoints.length > yourPoints ? false : true;


// console.log(betterThanAverage([2, 3], 5), true)
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);