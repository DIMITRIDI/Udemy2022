'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth;
const height = box.clientHeight; // ширина (высота) объекта без бордеров и прокрутки

console.log(width, height); // в консоль получим 383 и 333

const width1 = box.offsetWidth;
const height1 = box.offsetHeight; // ширина (высота) объекта с бордерами, прокруткой, маржином и педингом

console.log(width1, height1); // в консоль получим 400 и 350

const width2 = box.scrollWidth;
const height2 = box.scrollHeight; // высота и ширина объекта с учетом прокруток (само поле прокрутки не учитывается)

console.log(width2, height2); // в консоль получим 383 и 1352

const box1 = document.querySelector('.box'), // после клика на btn устанавливаем полную высоту box
      btn = document.querySelector('button');

   btn.addEventListener('click', () => {
   // box1.style.height = box1.scrollHeight + 'px';
   console.log(box.scrollTop); // в консоли получаем сколько объект прокручен вверх или влево
});

console.log(box.getBoundingClientRect()); // getBoundingClientRect получает все координаты, которые есть у элемента

console.log(box.getBoundingClientRect().top); // получить только одно значение top

// Как получить стили, которые уже были применены при помощи css

const style = window.getComputedStyle(box);

console.log(style.display);
