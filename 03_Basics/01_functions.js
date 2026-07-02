// functions means - few lines of packed in a package which we can use anywhere anytime.

// // Function declaration
// function add(a, b) {
//   return a + b;
// }

// // Function expression
// const multiply = function (a, b) {
//   return a * b;
// };

// // Arrow function
// const greet = name => `Hello, ${name}!`;

// // Examples
// console.log(add(2, 3));
// console.log(multiply(4, 5));
// console.log(greet('World'));
//======================================================================

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");  
}

sayMyName() // function call or function invocation.

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// addTwoNumbers(3, 4); // function call with arguments

function addTwoNumbers(num1, num2) {
// let result = num1 + num2;
// return result; // return statement is used to return the value from the function.
// // // nothing will get output return after declaring return in functions. 

// return num1 + num2; // we can also return the value directly without storing it in a variable.
 }

// const result = addTwoNumbers(3, 4); // function call with arguments
// //console.log("Result: " +result); // will now display the returned value

// function loginnUserMessage(username){
//   if(!username){
//     console.log("Please enter a username");
//     return; // return statement is used to exit the function if the condition is true.
//   }
// return `~${username} just logged in`
// }
// console.log(loginnUserMessage("Hitesh")); // function call with argument
// console.log(loginnUserMessage("")); // if you don't pass any argument it will return undefined. not Null


// function calculateCartPrice(...num1){ // ... is a rest operator and how this is used in function. 

//   return num1

// }
// console.log(calculateCartPrice( 200, 400, 500)); // function call with multiple arguments


// function calculateCartPrice(value1, value2, ...num1){ // ... is a rest operator and how this is used in function. 
  
//   return num1

// }
// console.log(calculateCartPrice( 200, 400, 500, 2000));

const user = { // this is object created & how we pass this object in function. 
  username: "Hitesh",
  price: 199, 
}

function handleObject(anyobject){ // this is function which takes object as parameter.
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user); // this is function call with object as argument.
// above example is how to pass object in a function. 


const mynewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){ // this is function which takes array as parameter.
  return getArray[1]; // this is how we can access the second value of array.
}

console.log(returnSecondValue(mynewArray));
