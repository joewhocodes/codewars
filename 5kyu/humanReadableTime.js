function humanReadable (seconds) {
    // let hours = (seconds / 3600) 
    let minutes = (seconds / 60)
    let hours = (minutes > 59 ? minutes / 60 : null)
    minutes = hours.toString().slice(-2);
    console.log(hours)
    console.log(minutes)
    // let min = (seconds / 60).toFixed(2);
    let sec = min.slice(-2);
    return (min.substring(0, 2) + (":") + sec)

};


console.log(humanReadable(124400))