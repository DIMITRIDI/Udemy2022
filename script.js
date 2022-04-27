"use strict"; 

const usdCurr = 28;
const eurCurr = 28;

function convert(amount, curr) {
   console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);