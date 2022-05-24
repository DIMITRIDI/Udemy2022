   function openModal(modalSelector, modalTimerId) { 
      const modal = document.querySelector(modalSelector);
      modal.classList.add('show');
      modal.classList.remove('hide');
      // modal.classList.toggle('show');
      document.body.style.overflow = 'hidden';

      console.log(modalTimerId);
      if (modalTimerId) { // если modalTimerId существует, то запускаем 
         clearInterval(modalTimerId); // если пользователь сам открыл modal, то очищаем modalTimerId
      }
   }

   function closeModal(modalSelector) {
      const modal = document.querySelector(modalSelector);
      modal.classList.add('hide');
      modal.classList.remove('show');
      // modal.classList.toggle('show');
      document.body.style.overflow = '';
   }

function modal(triggerSelector, modalSelector, modalTimerId) {
   const modalTrigger = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector);

   modalTrigger.forEach(btn => { // перебираем псевдомассив для всех кнопок btn
      btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
   });
   
   modal.addEventListener('click', (e) => { // Закрытие модального окна по клику в любую точку или на кнопку Esc
      if (e.target === modal || e.target.getAttribute('data-close') == '') { //если клик по подложке или х, то закрываем
         closeModal(modalSelector); // closeModal вызываем
      }
   });

   document.addEventListener('keydown', (e) => { // При нажатии на Esc вызывается closeModal закрывающая модальное окно
      if (e.code === "Escape" && modal.classList.contains('show')) {
      // добавляем условие чтоб Esc не срабатывало когда модальное окно закрыто
         closeModal(modalSelector);
      }
   });

   function showModalByScrol() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      // прокрутка страницы + видимая на мониторе окно страницы >= scrollHeight - значит пользователь долистал до конца
         openModal(modalSelector, modalTimerId);
         window.removeEventListener('scroll', showModalByScrol); 
         // после появления modal удаляем showModalByScrol чтоб modal больше не появлялось при прокрутке до конца
      }
   }

   window.addEventListener('scroll', showModalByScrol); //если пользователь долистал до конца страницы, показываем modal
}
export default modal; // экспортируем функцию по умолчанию
export {openModal, closeModal}; // экспортируем функции именованым экспортом