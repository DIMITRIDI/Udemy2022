'use strict';

// function User (name, age) { // функция-конструктор
//    this.name = name;
//    let userAge = age; // принимает параметр, который заложен при создании объекта

//    this.say = function () {
//       console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//    };

//    this.getAge = function() {
//       return userAge;
//    };

//    this.setAge = function(age) { // внутри возможны любые манипуляции с userAge
//       if (typeof age === 'number' && age > 0 && age < 199) {
//          userAge = age;
//       } else {
//          console.log('Недопустимое значение');
//       }
//    };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge()); // получим возраст

// ivan.setAge(30); // изменим возраст
// ivan.setAge(300); // в консоли получим недопустимое значение

// console.log(ivan.getAge()); // значение переменной возраст в текущий момент

// ivan.say(); // возраст отображается и присвоено значение 30

class User {
   constructor(name, age) {
      this.name = name;
      this._age = age; // принимает параметр, который заложен при создании объекта
   }

   #surname = 'Petrychenko';

   say = () => {
      console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
   }

   get age() {
      return this._age;
   }

   set age(age) { // внутри возможны любые манипуляции с userAge
      if (typeof age === 'number' && age > 0 && age < 199) {
         this._age = age;
      } else {
         console.log('Недопустимое значение');
      }
   }
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);
ivan.say();