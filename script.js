function func() {
   window.smth = 'string'; // создание лишней глобальной переменной
}

const someRes = getData();
const node = document.querySelector('.class');

setInterval(function() {
   if (node) {
      node.innerHTML = someRes;
   }
}, 1000); // не забывайте останавливать ненужные таймеры, происходит утечка памяти

function outer() {
   const potentiallyHugeArray = [];
   return function inner() {
      potentiallyHugeArray.push('Hello');
      console.log('Hello!!');
   };
}

const sayHello = outer(); // в переменной sayHello содержится ссылка на огромный массив potentiallyHugeArray

function createElement() {
   const div = document.createElement('div');
   div.id = 'test';
   document.body.append(testDiv);
}

createElement(); // в переменной testDiv лежит блок с установлнным id

function deleteElement() {
   document.body.removeChild(document.getElementById('test'));
}

deleteElement();