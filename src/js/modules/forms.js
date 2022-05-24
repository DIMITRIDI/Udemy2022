function forms() {
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
}
module.exports = forms; // экспортируем функцию
