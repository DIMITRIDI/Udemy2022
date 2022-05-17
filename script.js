'use strict';

// filter() - фильтрует массив
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) { // получим массив имен менее 5 букв
   return name.length < 5;
});

console.log(shortNames);

// map() - возвращает новый измененный массив
const ansvers = ['IvAn', 'AnnA', 'Hello']; // получим массив, где все строки в нижнем регистре

const result = ansvers.map(item => item.toLowerCase());

console.log(result);

let ansvers1 = ['IvAn', 'AnnA', 'Hello']; // вариант перезаписи массива без назначения новой переменной

ansvers1 = ansvers1.map(item => item.toLowerCase());

console.log(ansvers1);

// every()/some()
const someOut = [4, 'qvq', 'strefert']; // есть ли в массиве хоть одно число

console.log(someOut.some(item => typeof(item) === 'number')); // получим true

console.log(someOut.every(item => typeof(item) === 'number')); // все элементы подходят под условие, тогда вернет true

// reduce - схлопывает (собирает) массив в одно единое целое
const arr = [4, 5, 1, 3, 2, 6];
                  // 0        4
                  // 4        5
                  // 9        1
                  // 10       3...

const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr1 = ['apple', 'pear', 'plum'];

const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);
console.log(res1);

const arr2 = [4, 5, 1, 3, 2, 6];

const res2 = arr2.reduce((sum, current) => sum + current, 3);
console.log(res2); // reduse может принимать еще один аргумент, где 3 - начальное значение для вычислений

const obj = { // Необходимо получить имена людей из этого объекта
   ivan: 'persone',
   ann: 'persone',
   dog: 'animal',
   cat: 'animal'
};

const newArr = Object.entries(obj) // получим массив массивов
.filter(item => item[1] === 'persone') // получаем массив с 'persone'
.map(item => item[0]); // из массивов с 'persone' выделяем первые элементы
console.log(newArr);
