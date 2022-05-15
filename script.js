'use strict';

const persone = {
   name: 'Alex',
   tel: '+74444444'
};

console.log(JSON.stringify(persone));

console.log(JSON.parse(JSON.stringify(persone)));

const persone1 = {
   name: 'Alex',
   tel: '+74444444',
   parents: {
      mom: 'Olga',
      dad: 'Mike'
   }
};

const clone = JSON.parse(JSON.stringify(persone1));

clone.parents.mom = 'Ann';

console.log(persone1);
console.log(clone);
