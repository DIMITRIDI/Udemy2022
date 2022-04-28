'use strict';

// 1. Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные".
function getTimeFromMinutes(minutesTotal) {
   if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
      return "Ошибка, проверьте данные";
   }

   const hours = Math.floor(minutesTotal / 60);
   const minutes = minutesTotal % 60;

   let hoursStr = '';

   switch (hours) {
      case 0: 
         hoursStr = 'часов';
         break;
      case 1:
         hoursStr = 'час';
         break;
      case 2:
      case 3:
      case 4:
         hoursStr = 'часа';
         break;
      default:
         hoursStr = 'часов';
   }

   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);

// 2. Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом - возвращается - 0. Дробные числа разрешены.
function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
   if (typeof(a) !== 'number' ||
      typeof(b) !== 'number' ||
      typeof(c) !== 'number' ||
      typeof(d) !== 'number') {
      return 0;
   } else {
      return Math.max(a, b ,c, d);
   }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');