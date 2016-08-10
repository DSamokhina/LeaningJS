function find(arr, element) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}


arr = ["test", 2, 1.5, false];
var result;
result=find(arr, "test"); // 0
console.log(result);
result=find(arr, 2); // 1
console.log(result);
result=find(arr, 1.5); // 2
console.log(result);
result=find(arr, 0); // -1
console.log(result);



// в современном стандарте JavaScript существует встроенная функция Array#indexOf,