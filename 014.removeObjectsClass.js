var obj = {
    className: 'open open menu'
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

console.log(obj.className)

function removeClass(obj, remove_point) {
    var arr_className = obj.className.split(' ');
    var i=arr_className.length-1;
    while(i>=0){
        if (arr_className[i]==remove_point){
            arr_className.splice(i,1);
        }
        i--;
    }
    obj.className = arr_className.join(' ');
}