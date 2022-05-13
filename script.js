'use strict';

function User(name, id) { // функция-конструктор, с ее помощью можно создавать новых пользователей
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function() { // кроме свойств также можно записать и методы
      console.log(`Hello ${this.name}`);
   };
}

class User1 {
   constructor(name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
   }
   hello() {
      console.log(`Hello! ${this.name}`);
   }
   exit() {
      console.log(`Пщльзователь ${this.name} ушел`);
   }
}

User.prototype.exit = function() { // данный метод будет прототипно наследоваться и он появится у всех потомков
   console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 20); // внутри переменной ivan находится объект
const alex = new User('Alex', 28);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
