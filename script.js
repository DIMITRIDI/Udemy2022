'use strict';

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique(arr) {
   return Array.from(new Set(arr)); // создаем массив из Set
}

console.log(unique(arr));

const set = new Set(arr);

set.add('Ivan'); // добавление данных в Set
set.add('Oleg'); // второй Oleg в Set добавится не может

console.log(set); // в консоли получаем Set без повторений данных

// set.delete(value); // удаление значений из Set
// set.has(value); // проверять значения
// set.clear(value); // очистка набора
// set.size; // проверять размер Set

for (let value of set) {
   console.log(value);
}

set.forEach((value, valueAgaing, set) => {
   console.log(value, valueAgaing);
});

   console.log(set.values()); // выводит значения коллекции
   set.keys(); //метод существует для обратной совместимости с Map, у коллекции Set ключей нет
   set.entries(); //метод также существует для обратной совместимости с Map