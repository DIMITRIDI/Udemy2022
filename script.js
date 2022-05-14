'use strict';

const log = function(a, b, ...rest) { // Rest оператор – собрал отдельные элементы в один массив
   console.log();
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) { // Параметру по умолчанию (basis) присвоим 2
   console.log(number * basis);
}

calcOrDouble(3); // второй аргумент задается по умолчанию
