'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
   const request = new XMLHttpRequest(); // конструктор создает новый объект

   request.open('GET', 'js/current.json'); // метод open()  собирает настройки, которые помогут сделать запрос
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // что именно мы отправляем в запросе
   request.send(); // отправляем запрос

   // Свойства объекта:
   // status
   // statusText - текстовое описание ответа от сервера
   // response - ответ от сервера (тот ответ, который нам задал бэк-энд разработчик)
   // readyState - текущее состояние нашего запроса

   // Cобытия объекта 
   // readystatechange - отслеживает статус готовности нашего запроса в текущий момент
   // request.addEventListener('readystatechange', () => {
   //    if (request.readyState === 4 && request.status === 200) {
   //       console.log(request.response);
   //       const data = JSON.parse(request.response); // переводим JSON в обычный объект JS
   //       inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // рассчитываем курс валют на основании данных пришедших от сервера; toFixed(2) - оставляем два знака после запятой при расчете курся доллара
   //    } else { // на случай отказа сервера
   //       inputUsd.value = "Что-то пошло не так";
   //    }
   // });

   request.addEventListener('load', () => { // load - срабатывает 1 раз когда запрос уже полностью готов
      if (request.status === 200) {
         const data = JSON.parse(request.response);
         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
      } else {
         inputUsd.value = "Что-то пошло не так";
      }
   });

});
