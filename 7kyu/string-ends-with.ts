export const solution = (str: string, ending: string): boolean => {
    let result: boolean = false;
    let length: number = str.length - 1;
    if (!ending) return true;
    for (let i = ending.length - 1; i >= 0; i--) {
        if (ending[i] == str[length]) {
            length--;
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
};
