'use strict';

let id = Symbol("id");

const obj = {
   name: 'Test',
   [id]: 1,
   getId: function () { // метод получения id
      return this[id];
   }
};

for (let value in obj) {
   console.log(value); // в консоли получим только name (Symbol скрыто)
}

// let id = Symbol("id"); // Symbol всегда уникальны, даже если у них одинаковое описание
let id2 = Symbol("id");

console.log(id == id2); // в консоли получим false, у символов одинаковое описание, но они не равны

obj[id] = 1;

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

const myAwesomeDB = {
   movies: [],
   actors: [],
   [Symbol.for("id")]: 123
};

// Сторонний код библиотеки

myAwesomeDB.id = '2324242';

console.log(myAwesomeDB[Symbol.for('id')]); // в консоль получаем 123
console.log(myAwesomeDB); // В полученном объекте Symbol("id"): 123 - неизменен