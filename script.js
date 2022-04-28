'use strict';

/* 1. Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба. Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значение невозможно - вернуть строку "При вычислении произошла ошибка". */
function calculateVolumeAndArea(length) {
   if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
      return "При вычислении произошла ошибка";
   }

   let volume = 0,
      area = 0;
   
    volume = length * length * length;
    /* length ** 3 - это тоже самое, что и выше или варианты через цикл.
    ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает */
    area = 6 * (length * length);

   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

// 2. Напишите функцию, которая будет определять номер купе по номеру переданного ей места
function getCoupeNumber(seatNumber) {
   if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return "Ошибка. Проверьте правильность введенного номера места";
   }

   if (seatNumber === 0 || seatNumber > 36) {
      return "Таких мест в вагоне не существует";
   }

   for (let i = 4; i <= 36; i = i + 4) {
      if (seatNumber <= i) {
            return Math.ceil(i / 4);
      }
   }
}

getCoupeNumber(33);