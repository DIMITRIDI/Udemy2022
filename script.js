'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
   if (box.matches('.this')) {
      console.log(box); // в консоль получим конкретный элемент с классом this
   }
});

console.log(boxesQuery[0].closest('.wrapper')); // в консоль получим родителя wrapper

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
   const div = document.createElement('div');
   div.classList.add('box');
   // document.body.append(div);
   boxesGet[boxesGet.length] = div; // ошибка новичков
}

console.log(boxesQuery); // в консоли получили псевдомассив из узлов, структура имеет методы
console.log(boxesGet); // в консоли получили псевдомассив из элементов, не имеет методов
console.log(document.body.children);

console.log(Array.from(boxesGet)); // создаем массив из массивоподобного объекта