const reverseNoMethod = (w) => {
    return w.split('').map((e, i) => e = w[w.length -i -1]).join('')
}

console.log(reverseNoMethod('hello'))