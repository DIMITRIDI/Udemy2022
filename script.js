"use strict"; 

// Место для первой задачи
for (let i = 5; i < 11; i++) {
   console.log(i);
}

// Место для второй задачи
for (let i = 20; i >= 10; i--) {
   if (i === 13) {
      break;
   }
   console.log(i);
}

// Место для третьей задачи
for (let i = 2; i <= 10; i++) {
   if (i % 2 === 0) {
      console.log(i);
   }
}

// Место для четвертой задачи
let i = 3; 

while (i <= 16) { 
   if (i % 2 === 0) {
   } else {
      console.log(i);
   }
   i++; 
} 

// Место для пятой задачи
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
   arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);