const addLength = str => str.split(' ').map(e => `${e} ${e.length}`);

console.log(addLength('apple ban'))
