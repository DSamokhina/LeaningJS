"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var max=0, max_name='';

for (var name in salaries){
    if (salaries[name]>max) {
        max = salaries[name];
        max_name = name;
    }
}

console.log(max_name);


