// // // array

//  const myArr = [0,1,2,3,4,5]
// // // Javascript arrays are resizable, it can be add or delet the element. Mix data is accepted. 
// // // array indexing start with 0. 
//  let arr = [10, 20, 30];
// // console.log(arr[3]);

// const myArr2 = new Array(1,2,3,4)
// // console.log(myArr2[1]);

// // // Array Methods ::--> 
// // // myArr.push(6)
// // // myArr.push(7) // push is used to add value in an array.
// // // myArr.pop() // pop is used to remove last value from the array.


// // // myArr.unshift(0) // it shift first value of the array. 
// // // myArr.shift(0) // it removed the first value which has been added in unshift. 


// // // console.log(myArr.includes(9));
// // // console.log(myArr.indexOf(19)); // if the value is not there in the array then it will give -1 only in output. 

// const newArr = myArr.join()
// // // console.log(myArr);
// // // console.log(newArr);
// // // console.log(typeof newArr); // in join it changes the type of an array into string. 
// // // //
// // console.log(myArr);



// //  // Slice , splice. Method ::-->>
// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);  
// // Interview Question - what is the difference between slice and splice? 
// // Ans--> splice manupulates orignal array. 

//=======================================================================
// Lesson 02 Arryay_ basics .... 

const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// in push and concat operator give same value/ output. 
// Concat() method - combines 2 or more arrays and return new array. 

const all_new_heros = [...marvel_heros, ...dc_heros]// this oprator called spread operator most used method.
console.log(all_new_heros);

const another_array =[[1,2,3,[4,5,6],7,[6,7],[4,5]]]
const real_another_array = another_array.flat(Infinity) // flat(infinity give you a single array and remove insides array to make it simple.)
console.log(real_another_array);

console.log(Array.isArray("seoul")); // we can ask if it is an array or not - isArray
console.log(Array.from("seoul"));// from will covert to array. string, object can be converted in to array. 

console.log(Array.from({name:"vaishali"})); // it give u empty array. to get array value we need to tell with keys value pair in code. this is asked in interview question. 


let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1, score2, score3));
// Arrayed end here. Next session is OBJECTS. 







