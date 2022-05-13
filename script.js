'use strict';

// function showThis(a, b) { // 1 метод - вызов функции
//    console.log(this); // контекст this ссылается на глобальный объект window
//    function sum() {
//       console.log(this);
//       return this.a + this.b;
//    }

//    console.log(sum());
// }

// showThis(4, 5); // в консоли получим undefined, так как функция не находит аргументы a и b

// 1) Обычная функция this = window, но если use strict - undefined

const obj = {
   a: 20,
   b: 15,
   sum: function() {
      console.log(this);
   }
};
obj.sum(); // в консоли получим тот объект, в котором находится этот метод

// 2. Контекст у методов объекта - сам объект

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
}
let ivan = new User('Ivan', 23);

// 3. this в конструкторах и классах - это новый экземпляр объекта

function sayName(surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']); // функция приобрела контекст благодаря использованию методов call и apply

function count(num) {
   return this*num;
}

const double = count.bind(2); // bind создает новую функцию, связанную с контекстом
console.log(double(3));
console.log(double(13));

// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
   console.log(this); // контекстом вызова является сам элемент на котором произошло событие
   this.style.backgroundColor = 'red';
});

const obj1 = {
   num: 5,
   sayNumber: function() {
      const say = () => {
         console.log(this);
      };

      say();
   }
};

obj1.sayNumber();

const double1 = a => a * 2; // сокращенная запись благодаря стрелочной функции

console.log(double(4));

// В обработчиках событий при классическом написании функции мы имеем доступ к this, 
// если используем стрелочную функцию, то контекст вызова теряется, this будет равен undefined
const btn1 = document.querySelector('button');

btn1.addEventListener('click', (e) => {
   e.target.style.backgroundColor = 'red';
});
