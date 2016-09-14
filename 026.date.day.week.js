var date = new Date(2012,0,3);  // 3 января 2012
console.log( getWeekDay(date) );
console.log( getLocalDay(date) );

function getWeekDay(date) {
    var arrWeekDays = ['вс','пн','вт','ср','чт','пт','сб'];
    var weekDay = arrWeekDays[date.getDay()];
    return weekDay;
}

function getLocalDay(date) {
    var weekDay = date.getDay();
    return (weekDay>0?weekDay:7);
}