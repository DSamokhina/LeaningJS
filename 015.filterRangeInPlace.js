var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr);  // массив изменился: остались [3, 1]

function filterRangeInPlace(arr, int_begin, int_end) {
    var i=arr.length-1;
    while(i>=0){
        if (arr[i]<int_begin || arr[i]>int_end){
            arr.splice(i,1);
        }
        i--;
    }
}