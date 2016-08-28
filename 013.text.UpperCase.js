function camelize(changeStr){
    var arr = changeStr.split("-");
    var new_str=arr[0];
    var word='';
    for (var i=1; i<arr.length; i++){
        word = arr[i];
        new_str = new_str+word.charAt(0).toUpperCase()+word.substring(1);
    }
    return new_str;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image")) ;
console.log(camelize("-webkit-transition")) ;