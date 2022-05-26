'use strict';

setTimeout(() => console.log('timeout')); // второй аргумент не задан

Promise.resolve() // промис выполнился в положительную сторону
   .then(() => console.log('promise')); // раз промис готов, то мы его используем

queueMicrotask(() => console.log('wow')); // сообщение выполнилось между двумя микрозадачами

Promise.resolve()
   .then(() => console.log('promise_2'));

console.log('code');

// () => {} - макрозадача
// microtasks: then, catch, finally, либо при помощи оператора awai
// render - перерисовка страницы
// () => {} - следующая макрозадача