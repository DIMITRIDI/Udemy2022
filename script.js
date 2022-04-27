"use strict"; 

let num = 20;
function showFirstMessage(text) {
   console.log(text);
   console.log(num);
}

showFirstMessage('Hello World!');

function calc(a, b) {
   return (a + b);
}

console.log(4, 3);
console.log(5, 6);
console.log(6, 10);

function ret() {
   let num = 50;

   //

   return num;
}

const anotherNum = ret();
console.log(anotherNum);