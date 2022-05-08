'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

if (block) {
   console.log(block.textContent); // Ошибка блокирует исполнение дальнейшего кода
} // условие if позволяет избежать блокировки исполнения дальнейшего кода

console.log(block?.textContent);

console.log(1 + 2);

const userData = { // Данные полученные от пользователя
   name: 'Ivan',
   age: null,
   say: function () {
      console.log('Hello');
   }
};

userData.say();
userData.hey?.(); // так же проверяется метод с помощью оператора ?

if (userData && userData.skills && userData.skills.js) { // тольько в случае существования skills выводим в консоль
   console.log(userData.skills.js);
}

console.log(userData.skills?.js); // заменяем предыдущую проверку одним знаком ?