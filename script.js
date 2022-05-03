'use strict';

// To string
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number
// 1)
console.log(typeof(Number(null)));

// 2) unary plus
console.log(typeof(+'5'));

// 3) parseInt()
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean
// always false: 0, '', null, undefined, NaN
// always true: (пустые переменные, пустые массивы и т.п.)

// 1)
let switcher = null;

if (switcher) {
   console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!('4')));