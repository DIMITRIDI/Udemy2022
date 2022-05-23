'use strict';

const number = 1;
(function (){ // анонимная самовызывающаяся функция
   let number = 2;
   console.log(number);
   console.log(number + 3);
}());

console.log(number);

const user = (function (){
   const privat = function () {
      console.log('I am privat!');
   };

   return {
      sayHello: privat
   };
}());

user.sayHello(); // можем экспортировать методы из объектного интерфейса