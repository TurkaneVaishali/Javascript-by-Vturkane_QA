

// const score = 200
// if (score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
//=========================================================================

// Shorthand notation : --> 
const balance = 1000

if (balance> 500) console.log("test");// this is called implicite scope like man liya hai mene ki scope hai. 
//=====================================================================================
//=====================================================================================


// NESTING --> to check multiple conditions. 

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedin && debitCard && 2==3){
    console.log("Allow to buy courses");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");

}

