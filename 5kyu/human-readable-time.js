// Refactored code

const humanReadable = (seconds) => {
    seconds > 359999 ? seconds = 359999 : null
    const convertTime = (t) => (t - Math.floor(t)) * 60
    const toClock = (time) => time < 10 ? (String(time).padStart(2, 0)) : time

    const hours = seconds / 3600;
    const minutes = convertTime(hours);
    seconds = convertTime(minutes);

    return (
        toClock(Math.floor(hours)) +
        ':' +
        toClock(Math.floor(minutes)) +
        ':' +
        toClock(seconds < 59 ? Math.round(seconds) : Math.floor(seconds))
    );
}

console.log(humanReadable(3599));

// Old Code

function humanReadableOld(seconds) {
    if (seconds > 359999) {
        seconds = 359999;
    };
    const hours = seconds / 3600;
    const minutes = (hours - Math.floor(hours)) * 60;
    seconds = (minutes - Math.floor(minutes)) * 60;
    const convertTime = (time) => {
        console.log(time)
        time = Math.floor(time);
        if (time < 10) {
            return String(time).padStart(2, 0);
        } else {
            return time;
        }
    };
    console.log(seconds)
    console.log(Math.ceil(seconds))
    return (
        convertTime(hours) +
        ':' +
        convertTime(minutes) +
        ':' +
        convertTime(seconds < 59 ? Math.round(seconds) : seconds)
    );
}