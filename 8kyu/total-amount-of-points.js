const points = games => {
    let answer = 0;
    for (const score of games) {
        const arr = score.split(':');
        console.log(arr)
        if (Number(arr[0]) > Number(arr[1])) {
            answer += 3;
        } else if (Number(arr[0]) == Number(arr[1])) {
            answer += 1;
        }
    }
    return answer;
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));
