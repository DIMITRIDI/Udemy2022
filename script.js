const btn1 = document.querySelector('.btn');

btn1.addEventListener('click', () => {
   const timerId = setTimeout(logger, 2000);
});

// const timerId = setTimeout(logger, 2000); 
// асинхронные функции задаються в переменной, чтоб иметь возможность их останавливать

// function logger () {
//    console.log('text');
// }

const btn = document.querySelector('.btn');
let timerId,
   i = 0;

btn.addEventListener('click', () => {
   timerId = setInterval(logger, 2000);
});

function logger () {
   if (i === 3) {
      clearInterval(timerId);
   }
   console.log('text');
   i++;
}

let id = setTimeout(function log() {
   console.log('Hello');
   id = setTimeout(log, 500);
}, 500); // setTimeout  выжидает 500мс и только после этого запускает внутреннюю функцию

function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;

   const id = setInterval(frame, 10);
   function frame() {
      if (pos == 300) {
         clearInterval(id);
      } else {
         pos++;
         elem.style.top = pos + "px";
         elem.style.left = pos + "px";
      }
   }
}

btn.addEventListener('click', myAnimation);
