'use strict';

const user = {
   name: 'Alex',
   surname: 'Smith',
   birthday: '20/04/1993',
   showMyPublicData: function () {
      console.log(`${this.name} ${this.surname}`);
   }
};

const userMap = new Map(Object.entries(user)); // Создание карты из объекта с помощью entries
console.log(userMap);

const newUserObj = Object.fromEntries(userMap); // Создание объекта
console.log(newUserObj);

console.log(typeof(Object.keys(user)[0])); // число 4 превратилось в строку

const shops = [
   {rice: 500},
   {oil: 200},
   {bread: 50}
];

const budget = [5000, 15000, 25000]; // данные бюджета получаем из стороннего источника

const map = new Map([
   [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
   map.set(shop, budget[i]);
});

console.log(map); // полная карта со структурой объектов внутри объекта, однако на самом деле это массив массивов
console.log(map.get(shops[0])); // get - получение данных для дальнейшего взаимодействия
console.log(map.has(shops[0])); // has - проверяет наличие чего-то внутри карты
// map.delete(key); // удаляет что-то из карты
// map.clear(); // полная очистка карты
// map.size; // количество элементов внутри карты
// map.keys();

const goods = [];
for (let shop of map.keys()) { // получаем каждый отдельный магазин с его товарами
   goods.push(Object.keys(shop)[0]);
}
console.log(goods); // получили массив с товарами во всех магазинах

for (let price of map.values()) {
   console.log(price); // получили бюджеты каждого магазина
}

for (let [shop, price] of map.entries()) {
   console.log(shop, price);
}

map.forEach((value, key, map) => {
   console.log(value, key);
});