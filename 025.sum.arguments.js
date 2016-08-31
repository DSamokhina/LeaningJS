console.log(sum()) // 0
console.log(sum(1)) // 1
console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2, 3, 4))// 10

function sum(){
    var sum = 0;
    for (var i=0; i<arguments.length; i++){
        sum = sum+ arguments[i];
    }
    return sum;
}