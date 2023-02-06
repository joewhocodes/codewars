const spacey = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.length < 1) {
            newArr.push(arr[i]);
        } else {
            newArr.push(newArr[i - 1] + arr[i]);
        }
    }
    return newArr;
};
