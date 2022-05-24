function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
   const tabs = document.querySelectorAll(tabsSelector),
         tabsContent = document.querySelectorAll(tabsContentSelector),
         tabsParent = document.querySelector(tabsParentSelector);

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove(activeClass);
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

      if (target && target.classList.contains(tabsSelector.slice(1))) { // проверка что мы действительно кликаем в табы
         tabs.forEach((item, i) => { // item - каждый таб, i - номер таба по порядку
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
}

export default tabs; // экспортируем функцию