"use strict"; 

// Место для первой задачи
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
   result[i] = arr[i];
}

console.log(result);

// Место для второй задачи
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {        data[i] = data[i] * 2;
   } else if (typeof(data[i]) === 'string') {
      data[i] = `${data[i]} - done`;
   }
}

console.log(data);

// Место для третьей задачи
const data2 = [5, 10, 'Shopping', 20, 'Homework'];
const result2 = [];

for (let i = 1; i <= data2.length; i++) {
   result2[i - 1] = data2[data2.length - i];
}

console.log(result);