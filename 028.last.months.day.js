console.log(getLastDayOfMonth(2012, 1))      // 29 (високосный год, февраль).

function getLastDayOfMonth(year, month){
    var newDate = new Date(year, month+1);
    newDate.setDate(newDate.getDate()-1);
    return newDate.getDate();
}
