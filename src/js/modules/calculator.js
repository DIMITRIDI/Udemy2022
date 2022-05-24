function calculator() {
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
}
module.exports = calculator; // экспортируем функцию
