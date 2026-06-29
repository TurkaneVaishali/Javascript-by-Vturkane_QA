let score = "33"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // to transfer string into number.//
console.log(typeof valueInNumber); // if the score value is null then it will convert the output is 0).
// if u give undefined value to score then the output in conversion will be Nan (Not a number) 

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false=> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// for string//
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);