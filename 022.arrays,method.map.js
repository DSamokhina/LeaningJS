var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(currentName){
    return currentName.length;
})

console.log( arrLength ); // 4,5,2,5