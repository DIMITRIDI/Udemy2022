'use strict';

const user = {
   name: 'Alex',
   surname: 'Smith',
   [Symbol('birthday')]: '20/04/2021',
   birthday: '20/04/1993',
   showMyPublicData: function () {
      console.log(`${this.name} ${this.surname}`);
   }
};

// writable - если true - свойство можно изменить, если false - то оно только для чтения
// enumerable - если true - свойство будет перечисляться в цикл, если false - то циклы его будут игнорировать
// configurable - если true - свойство можно удалить, а его атрибуты изменить, если false - делать это нельзя
// В консоли все эти флаги стоят по умолчанию в позиции true
// в консоль выведем эти флаги, для этого нужно воспользоваться командой getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(user, 'name')); 

Object.defineProperty(user, 'name', {writable: false});
// user.name = 'dfkgkj'; // в консоли получаем ошибку, свойство можно читать, но нельзя изменять

Object.defineProperty(user, 'gender', {value: 'male'}); // создадим новое свойство gender
console.log(Object.getOwnPropertyDescriptor(user, 'gender')); // убедимся что все флаги false

// Задача: когда пользователь заполняет свои данные, то дату рождения он может указать только 1 раз, изменить ее нельзя
Object.defineProperty(user, 'birthday', {writable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday')); 

// Задача: необходимо куда-либо выводить данные из объекта
Object.defineProperty(user, 'showMyPublicData', {enumerable: false}); // данный метод не будет перечисляться в цикле
for (let key in user) {
   console.log(Object.getOwnPropertyDescriptor(user, "[Symbol('birthday')]"));
   console.log(key); // в консоли получим функцию showMyPublicData из изначального объекта
}

console.log(Object.getOwnPropertyDescriptor(Math, 'PI')); // получим объект с неизменяемыми свойствами

Object.defineProperties(user, { // способ позволяющий изменять все необходимые свойства
   name: {writable: false},
   surname: {writable: false}
});