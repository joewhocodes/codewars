// calculate average of input arr

const findAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length || 0;