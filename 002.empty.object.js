function isEmpty(obj) {
    var empty=true;
    for (var key in obj){
        empty=false;
        break;
    }
    return empty;
}

var schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
console.log( isEmpty(schedule) ); // false
