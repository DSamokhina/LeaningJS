function f(x) {
    if (arguments.length==1){
        return 1;
    }
    else {
        return 0;
    }
}

console.log(f(undefined)); // 1
console.log(f()); // 0