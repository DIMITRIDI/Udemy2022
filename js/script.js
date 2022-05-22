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
         modal = document.querySelector('.modal');

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

   modal.addEventListener('click', (e) => { // Закрытие модального окна по клику в любую точку или на кнопку Esc
      if (e.target === modal || e.target.getAttribute('data-close') == '') { //если клик по подложке или х, то закрываем
         closeModal(); // closeModal вызываем
      }
   });

   document.addEventListener('keydown', (e) => { // При нажатии на Esc вызывается closeModal закрывающая модальное окно
      if (e.code === "Escape" && modal.classList.contains('show')) {
      // добавляем условие чтоб Esc не срабатывало когда модальное окно закрыто
         closeModal();
      }
   });

   const modalTimerId = setTimeout(openModal, 50000); // вызов modal через 5 сек после открытия сайта

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

   const getResource = async (url) => { // делаем запрос
      const res = await fetch(url); // дожидаемся окончания запроса
      
      if (!res.ok) { // если что-то пошло не так
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json(); // трансформируем данные в JS объект
   };

   getResource('http://localhost:3000/menu') // получаем массив с сервера
      .then(data => {
         data.forEach(({img, altimg, title, descr, price}) => { // объект деструктуризируем
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            // создаем новую карточку на странице и ее рендерим
         });
      });

   // подключение к серверу через библиотеку axios
   // axios.get('http://localhost:3000/menu')
   //    .then(data => {
   //       data.data.forEach(({img, altimg, title, descr, price}) => {
   //          new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
   //       });
   //    });

      // 2 вариант
      // getResource('http://localhost:3000/menu')
      //    .then(data => createCard(data));
      
      // function createCard(data) {
      //    data.forEach(({img, altimg, title, descr, price}) => {
      //       const element = document.createElement('div');

      //       element.classList.add('menu__item');

      //       element.innerHTML = `
      //          <img src=${img} alt=${altimg}>
      //          <h3 class="menu__item-subtitle">${title}</h3>
      //          <div class="menu__item-descr">${descr}</div>
      //          <div class="menu__item-divider"></div>
      //          <div class="menu__item-price">
      //             <div class="menu__item-cost">Цена:</div>
      //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
      //          </div>
      //       `;

      //       document.querySelector('.menu .container').append(element);
      //    });
      // }

   // Forms
   const forms = document.querySelectorAll('form');

   const message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо! Скоро мы с Вами свяжемся',
      failure: 'Что-то пошло не так...'
   };

   forms.forEach(item => { // Самое главное взять все наши формы и под каждую подвязать функцию postData
      bindPostData(item);
   });

   const postData = async (url, data) => { // настройка запроса
      const res = await fetch(url, { // посылает запрос на сервер
         method: "POST",
         headers: {
            'Content-type': 'application/json'
         },
         body: data // получает ответ от сервера
      });

      return await res.json(); // трансформирует ответ от сервера в JSON (возвращаем промис)
   };

   function bindPostData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault(); // отмена стандартной работы браузера с перезагрузкой страницы

         const statusMessage = document.createElement('img'); // Для вывода сообщений создаем img 
         statusMessage.src = message.loading; // и добавляем ему картинку
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;
         // выводим сообщение о загрузке loading на страницу пользователя
         form.insertAdjacentElement('afterend', statusMessage);

         const formData = new FormData(form); // FormData - быстрое формирование данных заполненных пользователем

         const json = JSON.stringify(Object.fromEntries(formData.entries()));
         // formData превращаем в массив массивов, потом в объект, который превращаем в JSON
         postData('http://localhost:3000/requests', json) // отправляем json на сервер
         .then(data => {
            console.log(data); // выводим в консоль то что вернул сервер
            showThanksModal(message.success);
            statusMessage.remove(); // удаляем спинер
         }).catch(() => { // обрабатываем ошибки
            showThanksModal(message.failure);
         }).finally(() => {
            form.reset();
         });
      });
   }

   function showThanksModal(message) { 
      const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide'); // скрываем modal__dialog
      openModal();

      const thanksModal = document.createElement('div'); // создаем новый контент
      thanksModal.classList.add('modal__dialog'); // имеющийся в верстке .modal__dialog заменяем созданным modal__dialog
      thanksModal.innerHTML = `
         <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}×</div>
         </div>
      `;

      document.querySelector('.modal').append(thanksModal);  // Помещаем верстку JS на страницу 
      setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         closeModal();
      }, 4000);
   }

   // получим базу данных из файла db.json
   // fetch('http://localhost:3000/menu') // получим базу данных из файла db.json
   //    .then(data => data.json())
   //    .then(res => console.log(res));

   // slider
   // const slides = document.querySelectorAll('.offer__slide'),
   //    prev = document.querySelector('.offer__slider-prev'),
   //    next = document.querySelector('.offer__slider-next'),
   //    total = document.querySelector('#total'),
   //    current = document.querySelector('#current');
   // let slideIndex = 1;

   // showSlides(slideIndex);

   // if (slides.length < 10) { // если количество слайдов меньше 10,
   //    total.textContent = `0${slides.length}`; // то добавляем 0 к номеру слайда
   // } else { // если количество слайдов больше 10, 
   //    total.textContent = slides.length; // то добавляем только количество слайдов
   // }

   // function showSlides(n) {
   //    if (n > slides.length) {
   //       slideIndex = 1; // Если slides достигло максимума, то перемещаемся на первый slideIndex = 1
   //    }

   //    if (n < 1) { // Если слайд перемещается на менее 1, то перемещаемся на последний слайд
   //       slideIndex = slides.length;
   //    }

   //    slides.forEach(item => item.style.display = 'none'); // скрываем все слайды

   //    slides[slideIndex - 1].style.display = 'block'; // показываем активный

   //    if (slides.length < 10) {
   //       current.textContent = `0${slideIndex}`; // slideIndex - текущий слайд
   //    } else {
   //       current.textContent = slideIndex;
   //    }
   // }

   // function plusSlides(n) {
   //    showSlides(slideIndex += n);
   // }

   // prev.addEventListener('click', () => {
   //    plusSlides(-1);
   // });

   // next.addEventListener('click', () => {
   //    plusSlides(1);
   // });

   const slides = document.querySelectorAll('.offer__slide'),
      slider = document.querySelector('.offer__slider'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),
      slidesField = document.querySelector('.offer__slider-inner'),
      width = window.getComputedStyle(slidesWrapper).width; // ширина окна показа слайда

   let slideIndex = 1,
      offset = 0; // Чтоб смещать слайды относительно чего-то нам нужен ориентир

   function plusZero(slides) { // функция для замены повторяющегося выражения
      if (slides.length < 10) { // если количество слайдов меньше 10,
         current.textContent = `0${slideIndex}`; // то добавляем 0 к номеру слайда
         return current;
      } else {
         current.textContent = slideIndex; // то записываем номер слайда
         return current;
      }
   }

   plusZero(slides);

   if (slides.length < 10) { // если количество слайдов меньше 10,
      total.textContent = `0${slides.length}`; // то добавляем 0 к общему количеству слайдов
   } else { // если количество слайдов больше 10, 
      total.textContent = slides.length; // то добавляем только общее количество слайдов
   }

   slidesField.style.width = 100 * slides.length + '%'; // поле в котором все слайды в одну строку, задаем ширину
   slidesField.style.display = 'flex'; // выстраиваем слайды в одну линию
   slidesField.style.transition = '0.5s all';

   slidesWrapper.style.overflow = 'hidden'; // скрываем все слайды не попадающие в область видимости

   slides.forEach(slide => {
      slide.style.width = width; // переберем и каждому слайду установим ширину
   });

   slider.style.position = 'relative';

   const indicators = document.createElement('ol'),
         dots = [];
   indicators.classList.add('carousel-indicators');
   indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
   `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
   slider.append(indicators); // помещаем обертку внутри слайдера

   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li'); // создаем точки
      dot.setAttribute('data-slide-to', i + 1); // устанавливаем атрибут, нумерация начиная с единицы
      dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin-right: 3px;
         margin-left: 3px;
         cursor: pointer;
         background-color: #fff;
         background-clip: padding-box;
         border-top: 10px solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
      `;
      if (i == 0) { // добавляем класс активности первой точке
         dot.style.opacity = 1;
      }
      indicators.append(dot); // аппендим точки в обертку
      dots.push(dot);
   }

   function deleteNotDigits(str) { // функция для замены повторяющегося выражения
      return +str.replace(/\D/g, ''); // вырезание всех не цифр
   }

   function dotsOpasity(dots) { // функция для замены повторяющегося выражения
      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex-1].style.opacity = 1;
      return dots;
   }

   next.addEventListener('click', () => {
      if (offset == deleteNotDigits(width) * (slides.length - 1)) {
         offset = 0; // если доходим до последнего слайда, тогда возвращаемся на первый
      } else { // если не последний слайд, то добавляем смещение
         offset += deleteNotDigits(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`; // на сколько смещать слайдер

      // контролируем слайд-индекс
      if (slideIndex == slides.length) { // если слайдер дошел до конца
         slideIndex = 1; // то необходимо переместиться в первую позицию
      } else {
         slideIndex++; // или увеличиваем нумерацию
      }

      plusZero(slides);
      dotsOpasity(dots);
   });

   prev.addEventListener('click', () => {
      if (offset == 0) { // если доходим до первого слайда, тогда возвращаемся на последний
         offset = deleteNotDigits(width) * (slides.length - 1);
      } else { // если не первый слайд, то добавляем смещение
         offset -= deleteNotDigits(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`; // на сколько смещать слайдер

      if (slideIndex == 1) { // если слайдер дошел до начала
         slideIndex = slides.length; // то необходимо переместиться в последнюю позицию
      } else {
         slideIndex--; // или уменьшаем нумерацию
      }

      plusZero(slides);
      dotsOpasity(dots);
   });

   dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');

         slideIndex = slideTo; // индикатор счетчика слайдов
         offset = deleteNotDigits(width) * (slideTo - 1);

         slidesField.style.transform = `translateX(-${offset}px)`;

         plusZero(slides);
         dotsOpasity(dots);
      });
   });

   // Calculator

   const result = document.querySelector('.calculating__result span');
   let sex, height, weight, age, ratio;

   if (localStorage.getItem('sex')) { // если значение localStorage усиановлено
      sex = localStorage.getItem('sex'); // то присваиваем его переменной sex
   } else { // если значение localStorage не установлено
      sex = 'female'; // то присваиваем переменной sex по умолчанию female
      localStorage.setItem('sex', 'female'); // и записываем его в localStorage
   }

   if (localStorage.getItem('ratio')) { // то же самое и с ratio
      ratio = localStorage.getItem('ratio');
   } else {
      ratio = 1.375;
      localStorage.setItem('ratio', 1.375);
   }

   function calcTotal() { // основная функция для подсчета каллорий
      if (!sex || !height || !weight || !age || !ratio) { // функция отрабатывает только при заполнении всех данных
         result.textContent = '____'; // Можете придумать что угодно            
         return;
      }
      if (sex === 'female') {
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      } else {
         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
      }
   }

   calcTotal();

   function initLocalSettings(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => { // перебираем все элементы
         elem.classList.remove(activeClass); // и удаляем у всех класс активности
         if (elem.getAttribute('id') === localStorage.getItem('sex')) { // проверяем id и сравниваем с localStorage
            elem.classList.add(activeClass); // и добавляем класс активности элементу отмеченному в localStorage
         }
         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
         }
      });
   }

   initLocalSettings('#gender div', 'calculating__choose-item_active');
   initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

   function getStaticInformation(selector, activeClass) {
      const elements = document.querySelectorAll(selector); 

      elements.forEach(elem => {
         elem.addEventListener('click', (e) => { // отслеживаем клики по родительскому элементу
            if (e.target.getAttribute('data-ratio')) { // если у блока есть data-атрибут, то меняем data-ratio
               ratio = +e.target.getAttribute('data-ratio');
               localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else { // или если у блока есть id, то меняем его
               sex = e.target.getAttribute('id');
               localStorage.setItem('sex', e.target.getAttribute('id'));
            }

            elements.forEach(elem => { // сначала activeClass убираем у всех элементов
               elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass); // и добавляем activeClass елементу на котором произошло событие

            calcTotal(); // функция запускается каждый раз при каком-либо изменении пользователем данных
         });
      });
   }

   getStaticInformation('#gender div', 'calculating__choose-item_active');
   getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

   function getDynamicInformation(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () => {

         if (input.value.match(/\D/g)) { // если пользователем введено не число
            input.style.border = "1px solid red"; // то сообщаем об этом красным border
         } else {
            input.style.border = 'none'; // или нет border
         }
         switch(input.getAttribute('id')) { // при помощи swith case проверяем в какой input кликнул пользователь
            case "height":
               height = +input.value;
               break;
            case "weight":
               weight = +input.value;
               break;
            case "age":
               age = +input.value;
               break;
         }

         calcTotal(); // функция запускается каждый раз при каком-либо изменении пользователем данных
      });
   }

   getDynamicInformation('#height');
   getDynamicInformation('#weight');
   getDynamicInformation('#age');
});