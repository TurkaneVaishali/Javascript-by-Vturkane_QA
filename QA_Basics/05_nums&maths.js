const score = 400
//console.log(score);

const balance = new Number(100) // If we want specifically only number datatype then we can use this way. 
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));


 const otherNumber = 123.8966
// //console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); // u get values in comma's but us values. 


// ****************************** MATH Library **************************
// console.log(Math);
// make it absolute value - negative hai positive me karna hai. 
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); // round of value milegi. 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,6,8,2,7));
// console.log(Math.max(4,6,8,2,7));

console.log(Math.random()); // it always give values in between 0 to 1. 
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

const min = 10 
const max = 20
console.log(Math.random() * (max-min + 1))
console.log(Math.floor(Math.random() * (max-min + 1))+ min);


