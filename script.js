'use strict';

const user = {
   name: 'Alex',
   surname: 'Smith',
   birthday: '20/04/1993',
   showMyPublicData: function () {
      console.log(`${this.name} ${this.surname}`);
   }
};

for (let key in user) {
   console.log(user[key]);
}

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function () {};

console.dir(arr);

for (let key in arr) { // получает ключ
   console.log(key);
}

for (let key of arr) { // сразу получает значение
   console.log(key);
}

const str = 'string';

for (let key in str) {
   console.log(str[key]);
}

const salaries = {
   john: 500,
   ivan: 1000,
   ann: 5000,
   sayHello: function() {
      console.log('Hello');
   }
};

salaries[Symbol.iterator] = function () {
   return {
      current: this.john,
      last: this.ann,

      next() {
         if (this.current < this.last) {
            this.current = this.current + 500;
            return {done: false, value: this.current}; // цикл еще работает
         } else {
            return {done: true}; // цикл завершен
         }

         // {done: true, value: 123}
      }
   };
};

const iterator = salaries[Symbol.iterator](); // так как это метод, мы его сразу вызываем
console.log(iterator.next());

// for (let res of salaries) {
   // console.log(res);
// }