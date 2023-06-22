export const getMiddle = (s: string): string => {
    const letterArr = s.split('');
    const middle = Math.floor(letterArr.length / 2);
    return s.length % 2 !== 0
        ? letterArr[middle]
        : letterArr[middle - 1] + letterArr[middle];
};
