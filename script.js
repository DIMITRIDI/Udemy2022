'use strict';

console.log(1);

setTimeout(() => {
   console.log('timeout');
}, 2000);

setTimeout(() => {
   console.log('timeout_4000');
}, 4000);

console.log(2);

setTimeout(() => {
   console.log(1);
}, 0);

console.log(2);