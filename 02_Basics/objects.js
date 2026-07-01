// // object literals
// const mySym = Symbol("key1")
// const jsuser = {
//     name: "hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "jaipur",
//     email: "hitesh@gmail.com",
//     isLoggedIn: false,
//     lastloginDays: ["Monday", "Saturday"]
// }


// // console.log((jsuser.email));
// // console.log(jsuser["email"]);
// // console.log(jsuser["full name"]);
// // console.log(jsuser.mySym);
// // console.log(jsuser[mySym]);
// // torefer Symbol use [] bracket. 

// jsuser.email = "hitesh@gpt.com"
// //Object.freeze(jsuser)
// jsuser.email = "hitesha2microsoft.com"
// console.log(jsuser);

// jsuser.greeting = function(){
//     console.log("Hello JS user");
    
// }
// jsuser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); // this is called string interpolation.
    
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingTwo());
// //==============================================================================

// Object 02 session. 

//const tinderUser = new Object() // this is singlton object
const tinderUser= {} // this is non singlton object.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "sammy@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//console.log(regularUser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = {obj1, obj2} 

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);
