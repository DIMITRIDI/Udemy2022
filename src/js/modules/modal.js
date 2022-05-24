function modal() {
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
}
module.exports = modal; // экспортируем функцию
