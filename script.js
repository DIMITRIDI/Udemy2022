//Линейный поиск на JavaScript
function LinearSearch(t,A)      // t - искомый элемент,
{                               // A - массив, в котором ищем.
   var n = A.length, i = 0;   

   A[n] = t;
   
   while (A[ i ] !== t) i++;

    if (i < n) return i;          // На выходе индекс искомого элемента.
    else return -1;               // Если искомого элемента нет в массиве, то -1.
}

// Бинарный (двоичный) поиск на JavaScript
function BinarySearch(t,A)       // t - искомый элемент,
{                                // A - упорядоченный массив, в котором ищем.
   var i = 0, j = A.length, k; 
                                 
   while (i < j)                
   {  k = Math.floor((i+j)/2);
      if (t <= A[k]) j = k;
      else(i = k + 1);
   }
   
    if (A[ i ] === t) return i;     // На выходе индекс искомого элемента.
    else return -1;                 // Если искомого элемента нет в массиве, то -1.
}

// Интерполирующий поиск на JavaScript
function InterpolationSearch(t,A)          // t - искомый элемент,
{                                          // A - упорядоченный массив, в котором ищем.
   var mid, low = 0, high = A.length-1;

   while (A[low] < t && A[high] > t)
   {  mid = low + Math.floor( ((t-A[low])*(high-low))/(A[high]-A[low]) );
      if (A[mid] < t) low = mid+1;
      else if (A[mid] > t) high = mid-1;
      else return mid;
   }

   if (A[low] === t) return low;           // На выходе индекс искомого элемента.
   else if (A[high] === t) return high;    // Если искомого элемента нет в массиве, то -1.
   else return -1;

// Поиск подстроки на JavaScript
function SubstringSearch(sub, str)    // sub - искомая подстрока
{                                     // str - строка, в которой ищем
   var i, j, n = sub.length,
      N = str.length - n + 1;
   
   for (i = 0; i < N; i++) {  
      j = 0;
      while (j < n && sub.charAt(j) === str.charAt(i+j)) j++;
         if (j === n) return i;
   }                                // На выходе индекс 1-го символа подстроки.
                                     // Если искомой подстроки нет в строке, то -1.
   return -1;                       // Например,
}                                    // SubstringSearch('ips', 'Lorem ipsum') = 6,
                                     // SubstringSearch('dolor', 'Lorem ipsum') = -1.