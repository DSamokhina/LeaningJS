var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

function aclean(arr) {
    var new_arr = [];
    var current_word ;
    var i=arr.length-1;
    while(i>=0){
        current_word = arr[i].split('').sort().join('');
        if (new_arr.indexOf(current_word.toUpperCase())==-1){
            new_arr.push(current_word.toUpperCase());
        }
        else{
            arr.splice(i,1)
        }
        i--;
    }
    return arr;
}