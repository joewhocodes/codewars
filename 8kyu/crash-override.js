var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' }
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

const aliasGen = (f, n) => {
    const first = f[0].toUpperCase();
    const last = n[0].toUpperCase();
    if (first.toLowerCase() == first || last.toLowerCase() == last) {
        return 'Your name must start with a letter from A - Z.';
    }
    return `${firstName[first]} ${surname[last]}`;
};

console.log(aliasGen('Adam', 'Bot'))
