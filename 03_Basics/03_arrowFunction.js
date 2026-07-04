// // // This keyword --> tells abount current context. 
// // const user = {
// //     username: "hitesh",
// //     price: 999,

// //     welcomeMessage: function(){
// //         console.log(`${this.username}, welcome to website`);
        
// //     }
// // }
// // user.welcomeMessage()
// // // we cants use this in functions as we can use this keyword in objects. 

// // fucntion chai(){
// // let username = "hitesh"
// // console.log(this.username);
// //}

// // chai ()
// //===================================================================

// //another way 
// // const chai = function (){
// //     let username ="hitesh"
// //     console.log(this.username);
    
// // }

// const chai =()=> { // remove function word and add arrow sign for arrow functions. 
//     let username ="hitesh"
//     console.log(this.username);
// }

// chai()
// below is the basic arrow function example.-->>

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// Implicit return -- > 
const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(3,4))
// {} use kiya to return key word likhna padega agar () use kiya to return keys word nahi likhna padega. 

// if u want to return the object this is how we can write it.
const addTwo = (num1,num2) => ({isername: "hitesh"})


// IIFE - Immediately Invoked Function Expressions