// // // [{}, {}, {}] # for of loop # 

// // // const arr = [1,2,3,4,5]
// // // for (const num of arr){
// // //     console.log(num);
    
// // // }
// // // ==================================================================

// // const greeting = "Hello World!"
// // for (const greet of greeting){
// //     console.log(`Each char is ${greet}`); 
    
// // } // u can use this for of loop for taking out each charactor out from string or variale. 

// //================================================================
// //# Maps in JS.

// // const map = new Map() // map is an object which hold key value pair. 
// // map.set('IN', "India")
// // map.set('KR' , "Korea")
// // map.set('FR' , "France")

// // //console.log(map); // Map are known for its unique values and it is always in a order. 

// // for (const [key, value] of map) {
// //     // console.log(key, ':-', value);
    
// //}

// // // how to use Object in for of loops : --> 
// // const myObject = {
// //     'game1': 'NFS',
// //     'game2': 'Spiderman'
// // }

// // for (const [key, value] of myObject){
// //     console.log(key, ':-', value);
    
// // } // this wont work in this type of method. use another one. 

// // =======================================================================================

// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     rpp: "ruby",
//     swift: "swift by apple"
// }

// // for...in loop

// for (const key in myObject) {
 
//     //console.log(myObject[key]); another way to print
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// // // output - js shortcut is for javascript
// // cpp shortcut is for c++
// // rpp shortcut is for ruby
// // swift shortcut is for swift by apple.

// //==========================================================================================



// const programming = ["js", "rb", "py", "JS", "Java","c++", "cpp" ]

// for (const key in programming) {
//     console.log(programming[key]); // u get keys in for in loop.
//     // array has got keys. read in documentation of array. 
    
// }
//==================================================================================

const map = new Map() 
 map.set('IN', "India")
 map.set('KR' , "Korea")
 map.set('FR' , "France")

 for (const key in map) { // map is not iteratable so we can not iterate map. 
    console.log(key);
    
    
    
 }