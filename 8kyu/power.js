const numberToPower = (n, p) => {
    let result = 1;
    for (let i = 1; i <= p; i++) {
        result *= n;
    }
    return result;
}
