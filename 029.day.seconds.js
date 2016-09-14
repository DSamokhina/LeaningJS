console.log(getSecondsToday())

console.log(getSecondsToTomorrow())

function getSecondsToday() {
    var currentDate = new Date;
    return (currentDate.getHours()*60*60+currentDate.getMinutes()*60+currentDate.getSeconds())
}

function getSecondsToTomorrow() {
    var currentDate = new Date;
    var tomorrow = new Date(currentDate.getFullYear(),currentDate.getMonth(), currentDate.getDate()+1);
    console.log(tomorrow);
    console.log(currentDate);
    return((tomorrow-currentDate)/1000);
}