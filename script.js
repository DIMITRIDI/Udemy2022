// touchstart - при начальном касании элемента
// touchmove - при движении пальца по элементу
// touchend - при отрыве пальца от элемента
// touchenter - когда мы ведем по экрану и попадаем на элемент, на который навешено это событие
// touchleave - когда палец продолжил движение по экрану и ушел за пределы элемента с событием
// touchcancel - когда точка сопрекосновения больше не регистрируется на поверхности экрана

window.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) => {
      e.preventDefault();

      console.log('Start');

      // touches - список всех пальцев, которые взаимодействуют с экраном
      console.log(e.touches);

      // targetTouches - количество пальцев взаимодействующих с конкретным элементом
      console.log(e.targetTouches[0].pageX); // отслеживание координат при движении пальца

      // changedTouches - список пальцев, участвующих в текущем событии

   });

   box.addEventListener('touchmove', (e) => {
      e.preventDefault();

      console.log('Move');
   });

   box.addEventListener('touchend', (e) => {
      e.preventDefault();

      console.log('End');
   });
});
