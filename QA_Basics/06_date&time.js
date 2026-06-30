// Date
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // it is a global object.

let mycreatedDate = new Date(2023, 0, 23) // in JS months starts from 0.
//console.log(mycreatedDate.toDateString());

let myCreatedDate = new Date("2025-01-14")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime);
// console.log(Math.floor(Date.now()/1000));

 let newDate = new Date() // Date itself is an Object. 
// console.log(newDate);
// console.log(newDate.getMonth() +1);
// console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long"
})