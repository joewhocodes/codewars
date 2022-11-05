// The trick to counting kookaburras is to listen carefully

// The males sound like HaHaHa...

// The females sound like hahaha...

// And they always alternate male/female

//always string, always valid
//return number

const kookaCounter = k => k.split('a').filter((_, i, a) => a[i] !== a[i + 1]).join('').length;

console.log(kookaCounter('hahahahaha')) // = female => 1
console.log(kookaCounter('hahahahahaHaHaHa')) // (= female + male => 2)
console.log(kookaCounter('HaHaHahahaHaHa')) // male + female + male => 3


// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3