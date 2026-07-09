// // // filter is used everywhere. filter has call back function.
// // // scope jab likhte hai {} tab return word likhna hi hoga in filters. 

// // const myNum = [1,2,3,4,5,6,7,8,9,10]
// // const newNum = myNum.filter((num)=> num > 4) 
     
// // console.log(newNum);
// // =============================================================================

// const books = [
//     {
//         title: "Book One",
//         genre: "Fiction",
//         publish: 1981,
//         edition: 2004
//     },
//     {
//         title: "Book Two",
//         genre: "History",
//         publish: 1992,
//         edition: 2008
//     },
//     {
//         title: "Book Three",
//         genre: "Science",
//         publish: 1999,
//         edition: 2015
//     },
//     {
//         title: "Book Four",
//         genre: "Non-Fiction",
//         publish: 2005,
//         edition: 2012
//     },
//     {
//         title: "Book Five",
//         genre: "Biography",
//         publish: 2010,
//         edition: 2018
//     },
//     {
//         title: "Book Six",
//         genre: "Fantasy",
//         publish: 2015,
//         edition: 2020
//     },
//     {
//         title: "Book Seven",
//         genre: "Technology",
//         publish: 2020,
//         edition: 2023
//     },
//     {
//         title: "Book Eight",
//         genre: "Science",
//         publish: 2011,
//         edition: 2016
//     },
//     {
//         title: "Book Nine",
//         genre: "Non-Fiction",
//         publish: 1981,
//         edition: 1989
//     },
//     {
//         title: "Book Ten",
//         genre: "Programming",
//         publish: 2022,
//         edition: 2024
//     },
//     {
//         title: "Book Eleven",
//         genre: "Mystery",
//         publish: 1995,
//         edition: 2001
//     },
//     {
//         title: "Book Twelve",
//         genre: "Adventure",
//         publish: 2008,
//         edition: 2014
//     }
// ];

// let userBooks = books.filter((bk) => bk.genre=== 'History')

// userBooks = books.filter((bk) => {return bk.publish >= 2000})
// console.log(userBooks);

//=======================================================================================
// // to add 10 in all numbers. using Map - call back function
// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num)=> num+ 10)
// console.log(newNums);
//==========================================================================

// chaining Method :-> 2-3 method 1-1 karke laga do like map()-Map()- filter()


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40 )
console.log(newNums);
//===============================================================================

// # Reduce () method --> 
const myNums = [1,2,3,4]
const myTotal = myNums. reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)

console.log(myTotal);


