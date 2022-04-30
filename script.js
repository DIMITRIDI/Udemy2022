'use strict';

const arr = [1, 2, 3, 6, 8];

arr.pop();

console.log(arr);

const arr2 = [1, 2, 3, 6, 8];

arr2.push(10);

console.log(arr2);

const arr3 = [1, 2, 3, 6, 8];

for (let i = 0; i < arr3.length; i++) {
   console.log(arr3[i]);
}

const arr4 = [1, 2, 3, 6, 8];
for (let value of arr4) {
   console.log(value);
}

const arr5 = [1, 2, 3, 6, 8];
arr5[99] = 0;

console.log(arr5.length);
console.log(arr5);

const arr6 = [2, 3, 6, 8, 10];

arr6.forEach(function(item, i, arr6) {
   console.log(`${i}: ${item} внутри массива ${arr6}`);
});

const str = prompt("", "");
const products = str.split(", ");
console.log(products);

const str2 = prompt("", "");
const products2 = str2.split(", ");
console.log(products2.join('; '));

const arr7 = [2, 23, 16, 38, 10];
const str3 = prompt("", "");
const products3 = str3.split(", ");
products3.sort();
console.log(products3.join('; '));

const arr8 = [2, 23, 16, 38, 10];

arr8.sort(compareNum); // сравнение чисел массива
console.log(arr8);

function compareNum(a, b) {
   return a - b;
}
