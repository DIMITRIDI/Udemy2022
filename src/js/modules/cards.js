function cards() {
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
}

module.exports = cards;