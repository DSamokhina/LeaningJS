var continue_typing = true;
var new_number, sum=0;
var arr_num = [];
while (continue_typing){
    new_number = promt('Insert number',0);
    if ( (new_number==='') || (isNaN(new_number)) || (new_number===null) ) {
        continue_typing = false;
    }
    else{
        arr_num.push(new_number);
    }

    for(var i=0; i<new_number.length; i++){
        sum = sum+new_number[i];
    }
    alert(sum);
}
