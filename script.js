// const btn = document.querySelector('button');

// btn.onclick = function() {
   // alert('Click');
// };

// btn.onclick = function() {
   // alert('Second click');
// };
// - данный способ имеет два минуса:
// 1) невозможно удалить обработчик событий
// 2) срабатывает только последний обработчик

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
   // alert('Click');
// });

// btn.addEventListener('click', () => {
   // alert('Second click');
// });

// btn.addEventListener('mouseenter', (e) => {
   // console.log(e.target);
   // e.target.remove();
   // console.log('Hover');
// });

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

      let i =0;

const deleteElement = (e) => {
   console.log(e.currentTarget);
   console.log(e.type);
   // i++;
   // if (i == 1) {
      // btn.removeEventListener('click', deleteElement);
   // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
   event.preventDefault();

   console.log(event.target);
});

const btns = document.querySelectorAll('button');

const deleteElements = (e) => {
   console.log(e.currentTarget);
   console.log(e.type);

btns.forEach(btn => {
   btn.addEventListener('click', deleteElements);
});

btns.forEach(btn => {
   btn.addEventListener('click', deleteElement, {once: true});
});
