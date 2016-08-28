function fill_arr(n) {
    var arr = [];
   for (var i=0; i<n; i++){
       arr[i]=i+1;
   }
   return  arr;
}

function delete_elements(p, arr) {
    var i=arr.length-1;
    while (i>=p+1){
        if (arr[i]%p==0) {
            arr.splice(i, 1);
        }
        i = i - 1;
    }
}

//var n = promt("Введите количество чисел n",0);
var n=100, p=2, sum=0;
var arr = fill_arr(n, arr);
var size = arr.length;
for (var i=p; i<size; i++){
    delete_elements(i,arr);
    size = arr.length;
}
arr.shift();

for (var j=0; j<arr.length; j++){
    sum = sum+arr[j];
}

console.log(arr);
console.log(sum);



