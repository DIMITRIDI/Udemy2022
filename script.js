'use strict';

let user = {name: 'Ivan'};

const arr = [user]; // пока массив существует - объект тоже будет существовать в памяти
user = null;

console.log(user);
console.log(arr[0]); // объект доступен и хранится в памяти

let map = new WeakMap(); // создаем слабую карту с помощью WeakMap
// WeakMap сообщает сборщику мусора об удалении объекта, так как он не используется
user = null; 

console.log(map.has(user)); // получаем false значит объект был удален автоматически
console.log(map); // в консоли получим "нет никаких свойств"

let cache = new WeakMap();

function cacheUser(user) {
   if (!cache.has(user)) { // если пользователя нет в кэше
      cache.set(user, Date.now()); // то его добавим
   }

   return cache.get(user); // получаем пользователя
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};
// оба пользователя зашли в чат
cacheUser(lena);
cacheUser(alex);

lena = null; // вышла из чата

console.log(cache.has(lena)); // false - удалена из памяти после выхода из чата
console.log(cache.has(alex)); // true - остается в кэше

let messages = [
   {text: 'Hello', from: 'John'},
   {text: 'World', from: 'Alex'},
   {text: '!!!!!', from: 'Mary'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]); // добавим новое сообщение как прочитанное
// readMessages.add(messages[1]); // добавим новое сообщение как прочитанное

readMessages.add(messages[0]); // как и обычный Set не дублирует уникальные данные
messages.shift(); // false - удалили объект из памяти
console.log(readMessages.has(messages[0])); // true - значит сообщение находится в WeakSet