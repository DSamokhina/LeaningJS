var obj = {
    className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"


function addClass(obj, new_point) {
    var arr = obj.className.split(' ');
    for (var i=0; i<arr.length; i++){
        if (arr[i]==new_point){
            return;
        }
    }
    arr.push(new_point);
    obj.className = arr.join(' ');
}