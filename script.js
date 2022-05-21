'use strict';

// new RegExp('patern', 'flags');
// /patern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;

// console.log(ans.match(reg));

const str = 'My name is R2D2'; // вырежем имя R2D2

console.log(str.match(/\D/ig)); // ищем все НЕцифры

// \D - ищем нецифры
// \W - ищем неслова
// \S - ищем непробелы

// \d - ищем цифры
// \w - ищем слова
// \s - ищем пробелы

// i
// g
// m

// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));