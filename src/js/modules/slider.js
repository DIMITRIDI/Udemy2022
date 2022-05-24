function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
   const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      prev = document.querySelector(prevArrow),
      next = document.querySelector(nextArrow),
      total = document.querySelector(totalCounter),
      current = document.querySelector(currentCounter),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
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
}
export default slider; // экспортируем функцию
