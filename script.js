import $ from 'jquery';

$(document).ready(function() { // Обработчик готовности дерева DOM
   $('.list-item:first').hover(function() {
      $(this).toggleClass('active');
   });

   $('.list-item:eq(2)').on('click', function() {
      $('.image:even').fadeToggle('slow'); // скрытие четных элементов
   });

   $('.list-item:eq(4)').on('click', function() {
      $('.image:odd').animate({
         opacity: 'toggle',
         height: 'toggle'
      }, 3000);
   });
});