var goods=['tea','water','coffee'];
console.log('the last element: '+goods[goods.length-1]);

goods.push('new last element');
console.log(goods);



//Создайте массив styles с элементами «Джаз», «Блюз».
//Добавьте в конец значение «Рок-н-Ролл»
//Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».


var styles = ['Джаз','Блюз'];
styles.push('Рок-н-Ролл');
if (styles.length>2){ styles[styles.length-2] = 'Классика'}
console.log(styles.shift());
styles.unshift('Рэп','Регги');
console.log(styles)