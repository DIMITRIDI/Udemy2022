'use strict';

try {
   console.log('Normal'); // то действие, которое хотим выполнить
   console.log(a);
   console.log('result');
} catch(error) {
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
} finally {
   
}

console.log('Still normal');