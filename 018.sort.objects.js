var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
people.sort(compareNumeric);


function compareNumeric(obj1, obj2) {
   return obj1.age-obj2.age ;
}

for (var i=0; i<people.length; i++){
    console.log(people[i].name);
}

// теперь people: [vovochka, masha, vasya]
