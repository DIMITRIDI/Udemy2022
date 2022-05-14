window.addEventListener('DOMContentLoaded', () => {
// tabs
   const tabs = document.querySelectorAll('.tabheader__item'),
         tabsContent = document.querySelectorAll('.tabcontent'),
         tabsParent = document.querySelector('.tabheader__items');

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) { // проверка что мы действительно кликаем в табы
         tabs.forEach((item, i) => { // item - каждый таб, i - номер таба по порядку
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });

// timer
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

// modal
   const modalTrigger = document.querySelectorAll('[data-modal]'),
         modal = document.querySelector('.modal'),
         modalCloseBtn = document.querySelector('[data-close]');

   function openModal() { 
      modal.classList.add('show');
      modal.classList.remove('hide');
      // modal.classList.toggle('show');
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimerId); // если пользователь сам открыл modal, то очищаем modalTimerId
   }

   modalTrigger.forEach(btn => { // перебираем псевдомассив для всех кнопок btn
      btn.addEventListener('click', openModal);
   });
   
   function closeModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      // modal.classList.toggle('show');
      document.body.style.overflow = '';
   }

   modalCloseBtn.addEventListener('click', closeModal); // closeModal передаем

   modal.addEventListener('click', (e) => { // Закрытие модального окна по клику в любую точку или на кнопку Esc
      if (e.target === modal) { // если клик происходит по modal, то закрываем модальное окно
         closeModal(); // closeModal вызываем
      }
   });

   document.addEventListener('keydown', (e) => { // При нажатии на Esc вызывается closeModal закрывающая модальное окно
      if (e.code === "Escape" && modal.classList.contains('show')) {
      // добавляем условие чтоб Esc не срабатывало когда модальное окно закрыто
         closeModal();
      }
   });

   const modalTimerId = setTimeout(openModal, 5000); // вызов modal через 5 сек после открытия сайта

   function showModalByScrol() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      // прокрутка страницы + видимая на мониторе окно страницы >= scrollHeight - значит пользователь долистал до конца
         openModal();
         window.removeEventListener('scroll', showModalByScrol); 
         // после появления modal удаляем showModalByScrol чтоб modal больше не появлялось при прокрутке до конца
      }
   }

   window.addEventListener('scroll', showModalByScrol); //если пользователь долистал до конца страницы, показываем modal

   // используем классы для карточек
   class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector, ...classes) { // добавим Rest-оператор classes
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.descr = descr;
         this.price = price;
         this.classes = classes; // запишем Rest-оператор в свойства чтоб его можно было использовать
         this.parent = document.querySelector(parentSelector); // родитель, куда передаем верстку
         this.transfer = 27; // пока статический курс валют
         this.changeToUAH(); // метод вызываем прямо в конструкторе
      }

      changeToUAH() { // метод для конвертации гривны в доллар
         this.price = this.price * this.transfer;
      }

      render() { // метод для формирования верстки
         const element = document.createElement('div'); // создаем элемент
         
         if (this.classes.length === 0) { // условие ксли пользователь забудет прописать класс
            this.element = 'menu__item'; // если ни один элемент в классы не передан, 
            element.classList.add(this.element); // то установим дефолтный класс
         } else { // если же есть хотя бы 1 класс, то запускаем forEach, добавляющий этот класс во все карточки
            this.classes.forEach(className => element.classList.add(className));
         }

         element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;
         this.parent.append(element);
      }
   }

   new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      "Меню 'Фитнес'",
      "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством массового потребления!",
      9,
      ".menu .container",
      "menu__item"
   ).render(); // вызываем класс MenuCard и передаем в него аргументы

   new MenuCard(
      "img/tabs/elite.jpg",
      "elite",
      "Меню 'Премиум'",
      "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд лучшими нашими поварами. Красная рыба, морепродукты, овощи, грибы, фрукты - ресторанное меню без похода в ресторан!",
      14,
      ".menu .container",
      "menu__item"
   ).render(); // вызываем класс MenuCard и передаем в него аргументы

   new MenuCard(
      "img/tabs/post.jpg",
      "post",
      "Меню 'Постное'",
      "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
      21,
      ".menu .container",
      "menu__item"
   ).render(); // вызываем класс MenuCard и передаем в него аргументы
});
