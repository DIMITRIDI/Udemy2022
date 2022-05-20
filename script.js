'use strict';

// localStorage.setItem('number', 5); // чтоб записать

// localStorage.getItem('number'); // чтоб получать

// localStorage.removeItem('number'); // чтоб удалять

// localStorage.clear(); // полная очистка хранилища

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
   checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') { // если значение изменено
   form.style.backgroundColor = 'red'; // красим форму в красный
}

checkbox.addEventListener('change', () => {
   localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
   if (localStorage.getItem('bg') === 'changed') { // если значение изменено
      localStorage.removeItem('bg'); // то удаляем класс bg из localStorage
      form.style.backgroundColor = 'white';
   } else { // или устанавливаем bg в позицию changed и красим form в красный цвет
      localStorage.setItem('bg', 'changed');
      form.style.backgroundColor = 'red';
   }
});

const persone = {
   name: 'Alex',
   age: 25
};

const serializedPersone = JSON.stringify(persone); // объект превратим в JSON-формат
localStorage.setItem('alex', serializedPersone); // сохраняем объект в localStorage

console.log(JSON.parse(localStorage.getItem('alex')));