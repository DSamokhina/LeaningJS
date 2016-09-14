var d = new Date(2014, 0, 1); // 30 января 2014
console.log( formatDate(d) ); // '30.01.14'

function formatDate(d) {
    var date = d.getDate();
    if (date<10){
        date = '0'+date;
    }
    var year = d.getFullYear().toString().substring(2);
    return date+'.'+d.getMonth()+1+'.'+year;
};