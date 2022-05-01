"use strict";

const obj = {
   a: 5,
   b: 1
};

const copy = obj; //Ссылка на уже существующий объект

copy.a = 10;

console.log(copy);
console.log(obj);

function copy1(mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

const newNumbers = copy1(numbers); // клонирование объекта, поверхностная копия

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

function copy2(mainObj) {
   let objCopy2 = {};

   let key;
   for (key in mainObj) {
      objCopy2[key] = mainObj[key];
   }

   return objCopy2;
}

const numbers2 = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

const newNumbers2 = copy2(numbers2);

newNumbers2.a = 10;
newNumbers2.c.x = 10;

console.log(newNumbers2);
console.log(numbers2);

const add = {
   d: 17,
   e: 20
};

console.log(Object.assign(numbers2, add));

// Создадим копию массива методом slice()
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adgsghfk';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);
// оператор разворота развернул массивы на отдельные элементы

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [2, 5, 7];

log(...num); // Три аргумента передаем в функцию log

// Создаем копию массива с помощью спред-оператора
const array = ["a", "b"];

const newAarray = [...array];

// Создаем копию объекта с помощью спред-оператора
const q = {
   one: 1,
   two: 2
};

const newObj = {...q};
