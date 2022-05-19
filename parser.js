window.addEventListener('DOMContentLoaded', () =>{
   const body = document.querySelector('body');
   let textNodes = []; // полученные node запишем в массив
// воспользуемся рекурсией - будем перебирать все node-узлы пока не дойдем до конечных
   function recursy(element) {
      element.childNodes.forEach(node => { // получаем все дочерние node-узлы body
         if (node.nodeName.match(/^H\d/)) { // /^/ - модификатор начала строки
            const obj = { // создадим объект с информацией
               header: node.nodeName,
               content: node.textContent
            };
            textNodes.push(obj); // весь текст внутри тэга попадет в массив
         } else {
            recursy(node); // или запускаем рекурсию
         }
      });
   }

   recursy(body); // запускаем функцию с элемента body

   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json'
      },
      body: JSON.stringify(textNodes)
   })
   .then(Response => Response.json())
   .then(json => console.log(json));

});
