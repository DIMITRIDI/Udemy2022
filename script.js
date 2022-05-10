'use strict';

// const bigint = 1314354325436756746345634657868n; // чтоб превратить число в BigInt нужно поставить в конце числа n

const sameBigint = BigInt(1314354325436756746345634657868);

// console.log(typeof(bigint)); // получили тип данных bigint

// console.log(5n + 1); // получили ошибку

// console.log(Math.round(5n)); // получили ошибку

console.log(5n / 2n);

console.log(2n > 5); // получим false

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // конвертируем 2 в новое большое число
console.log(Number(bigint) + number); // конвертируем bigint в обычное число