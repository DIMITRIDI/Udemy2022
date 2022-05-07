'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const movieDB = {
      movies: [
         "Логан",
         "Лига справедливости",
         "Ла-ла лэнд",
         "Одержимость",
         "Скотт Пилигрим против..."
      ]
   };

   const adv = document.querySelectorAll('.promo__adv img'),
         poster = document.querySelector('.promo__bg'),
         genre = poster.querySelector('.promo__genre'),
         movieList = document.querySelector('.promo__interactive-list'),
         addForm = document.querySelector('form.add'),
         addInput = addForm.querySelector('.adding__input'),
         checkbox = addForm.querySelector('[type="checkbox"]');


   // 1) Удалить все рекламные блоки со страницы (правая часть сайта)
   const deleteAdv = (arr) => {
      arr.forEach(item => {
         item.remove();
      });
   };

   const makeChanges = () => {
      // 2) Изменить жанр фильма, поменять "комедия" на "драма"
      genre.textContent = 'драма';

      // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. 
      // Реализовать только при помощи JS
      poster.style.backgroundImage = 'url("img/bg.jpg")';
   };

   // 5) Добавить нумерацию выведенных фильмов 
   const sortArr = (arr) => {
      arr.sort();
   };

   /* 6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
   новый фильм добавляется в список. Страница не должна перезагружаться.
   Новый фильм должен добавляться в movieDB.movies.
   Для получения доступа к значению input - обращаемся к нему как input.value;
   P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий. */
   addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let newFilm = addInput.value;
      const favorite = checkbox.checked;

      if (newFilm) { // условие выполняется только если input заполнен (не пустая строка)
         // 7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
         if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
         }

         // 9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
         if (favorite) {
            console.log("Добавляем любимый фильм");
         }

         movieDB.movies.push(newFilm);
         sortArr(movieDB.movies);

         createMovieList(movieDB.movies, movieList);
      }

      event.target.reset(); // очищаем форму после нажати "Подтвердить"

   });

   function createMovieList(films, parent) {
      // 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
      parent.innerHTML = "";

      // 10) Фильмы должны быть отсортированы по алфавиту */
      sortArr(films);

      films.forEach((film, i) => {
         parent.innerHTML += `
            <li class="promo__interactive-item">${i +1} ${film}
               <div class="delete"></div>
            </li>
         `;
      });

      // 8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
      document.querySelectorAll('.delete').forEach((btn, i) => { // i - нумерация фильмлв
         btn.addEventListener('click', () => {
            btn.parentElement.remove(); // удаляем фильм со страницы (родителя btn)
            movieDB.movies.splice(i, 1); // и удаляем его из базы данных

            createMovieList(films, parent); // для сохранения правильной нумерации при удалении применим рекурсию
            });
      });

   }

   deleteAdv(adv);
   makeChanges();
   createMovieList(movieDB.movies, movieList);
});

