function timer() {
   const deadLine = '2022-12-31';

   function getTimeRemaining(endtime) { // получаем разницу между дедлайн и текущей датой в милисекундах
      let days, hours, minutes, seconds;
      const t = Date.parse(endtime) - Date.parse(new Date());

      if (t <= 0) {
         days = 0;
         hours = 0;
         minutes = 0;
         seconds = 0;
      } else {
         days = Math.floor(t / (1000 * 60 * 60 * 24)), // полученную разницу в миллисекундах преобразовываем в дни
         seconds = Math.floor((t / 1000) % 60), // полученную разницу в миллисекундах преобразовываем в секунды
         minutes = Math.floor((t / 1000 / 60) % 60), // полученную разницу в миллисекундах преобразовываем в минуты
         hours = Math.floor((t / (1000 * 60 * 60) % 24)); // полученную разницу в миллисекундах преобразов в часы
      }

      return { // возвращаем объект
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      };
   }

   function getZero(num) { // Подставим ноль в показания дней и часов если там одинарное число
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

      function setClock(selector, endtime) { // установим часы на странице
      const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000); // функция запускается каждую секунду

      updateClock(); // в ручную запускаем updateClock чтоб убрать мигание верстки при запуске, 
      // а далее она будет сама срабатывать через 1000 мс
      
      function updateClock() { // функция обновления таймера каждую секунду
         const t = getTimeRemaining(endtime); // расчет оставшегося времени на текущую секунду

            days.innerHTML = getZero(t.days); // выводим на страницу дни, часы, минуты и секунды
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) { // если время вышло <= 0, то мы больше таймер не обновляем
               clearInterval(timeInterval);
            }

      }
   }

   setClock('.timer', deadLine);
}

module.exports = timer; 
