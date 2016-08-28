var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

console.log( unique(strings)); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

function unique(arr) {
    var new_arr = [];
    for(var i=0;i<arr.length;i++){
        if (new_arr.indexOf(arr[i])==-1){
            new_arr.push(arr[i]);
            }
    }
    return new_arr;
}