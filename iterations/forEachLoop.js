const coding = ["js", "ruby", "java", "JS", "cpp", "c++"]

// coding.forEach(function(val){
//     console.log(val);
    
// }) // Foreach loop.

// coding.forEach((item) => {
//     console.log(item);
    
// // }
// // )
// // arrow function syntax shortcut -- 
// // (()=>{})

//     coding.forEach((item, index, arr)=> {
//         console.log(item, index, arr);
        
//     })
//===================================================================

const myCoding = [ // array ke under object hai usaka access lena. 
    {
        languageName: "javascript",
        languageFileName : ".js"
    } , 
    {
        languageName: "python",
        languageFileName : ".py"
    } ,
    {
        languageName: "java",
        languageFileName : ".java"
    }


]

myCoding.forEach((item)=>{
    console.log(item.languageFileName, item.languageName);
    
})