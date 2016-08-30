var arr = [ 1, 2, 3, 4, 5 ];
var result = getSums(arr);

function getSums(arr) {

    var result = [];

    arr.reduce(function (sum, current) {
        result.push(sum );
        return sum + current;
    });

    return result;

}
console.log(result);