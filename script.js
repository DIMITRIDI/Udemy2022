'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => { // следим за observer
   console.log(mutationRecords); // какие действия будем предпринимать
});

observer.observe(box, { // выбираем объект за каким нужно следить
   childList: true // выбираем за какими изменениями нужно следить
});

observer.disconnect(); // завершение слежения за объектом