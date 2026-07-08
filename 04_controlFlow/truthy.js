const userEmail = "h@hitesh.com"

if (userEmail){
    console.log("Got user email: ");
}
else {
    console.log("Don't have user email ");
    
}
// Falsy Value :-->
//false, 0, -0, BigInt 0n, "" , null , undefined, NaN 
// Truthy values :  [] , “0” , ‘false’ , “ ” space , {} , function () {} – empty function is truthy values. 

const emptyObj = {}

if (Object.keys(emptyObj).length=== 0){
    console.log("Object is empty");
    
}