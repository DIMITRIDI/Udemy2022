'use strict';

const now = new Date(0);

console.log(now); // отсчет времени ведется в мсек от даты 1970-01-01T00:00:00.000

console.log(now.getFullYear()); // получаем год
console.log(now.getMonth()); // получаем месяц
console.log(now.getDate()); // получаем определенный день месяца
console.log(now.getDay()); // получаем определенный день недели (0 – воскресенье, … 6 – суббота)
console.log(now.getUTCHours()); // получение по общемировому времени
console.log(now.getTimezoneOffset()); // показывает разницу между часовым поясом и общемировым временем
console.log(now.getTime()); // количество мсек после 1970 года

// const now1 = new Date('2022-05-12');
//      new Date.parse('2022-05-12');

let start = new Date();

for (let i = 0; i < 100000; i++) {
   let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);
// метод для измерения скорости отработки цикла