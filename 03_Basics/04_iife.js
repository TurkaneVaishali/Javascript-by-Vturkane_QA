// // IIFE - Immediately Invoked Function Expressions

(function chai (){
    console.log(`DB CONNECTED`);
    
})();
// Global scope ke pollution se problem hoti hai kai bar to us global scope ke pollution ko katane ke liye hamane iife()() ka use kiya. 


(() => {
    console.log(`DB CONNECTED TWO`);
    
})()
//==============================================================================================================================\


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

