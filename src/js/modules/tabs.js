function tabs() {
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
}

module.exports = tabs; // экспортируем функцию