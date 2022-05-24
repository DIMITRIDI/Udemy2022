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

   async function getResource(url) { // делаем запрос
      let res = await fetch(url); // дожидаемся окончания запроса
      
      if (!res.ok) { // если что-то пошло не так
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json(); // трансформируем данные в JS объект
   }

   export {postData};
   export {getResource};