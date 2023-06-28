export const findMultiples = (integer: number, limit: number): number[] => {
    const multiples: number[] = [];
    for (let i: number = 1; i <= limit; i++) {
        if (i % integer === 0) {
            multiples.push(i);
        }
    }
    return multiples;
};
