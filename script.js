"use strict"; 

const hamburger = 5;
const fries = 0;

if (hamburger === 3 && fries) {
   console.log('Я сыт!');
} else {
   console.log('Товар закончился');
}

console.log((hamburger && fries));

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
   console.log('Все довольны!');
} else {
   console.log('Мы уходим');
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(!0);

// задачи
console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);

// Выполняется ли условие?

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

// Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

// Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}