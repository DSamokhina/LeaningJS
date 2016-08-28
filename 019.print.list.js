var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//printList(list);
//printListRecurse(list);
//printReverseList(list);
printReverseListRecurse(list);

function printList(list) {
    var current_obj = list;
    while (current_obj.next !== null){
        console.log(current_obj.value);
        current_obj = current_obj.next;
    }
    console.log(current_obj.value);
}

function printListRecurse(list) {
    console.log(list.value);
    if (list.next){
        printListRecurse(list.next);
    }
}

function printReverseList(list) {
    var current_obj = list;
    var arr = [];
    while (current_obj.next !== null){
        arr.push(current_obj.value);
        current_obj = current_obj.next;
    }
    arr.push(current_obj.value);
    for(var i=arr.length-1; i>=0; i-- ){
        console.log(arr[i]);
    }
}

function printReverseListRecurse(list) {
    if (list.next){
        printReverseListRecurse(list.next);
    }
    console.log(list.value);
}

