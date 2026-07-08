// //==============================================================================

// # break and continue keysword how to use in JS :-> 
// for (let index = 1; index <= 20; index++) {
//    console.log(`Value of index is ${index}`);
   
    
// }

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
        
//     }
//    console.log(`Value of index is ${index}`);
   
    
// }
// Que - prinr number 1 to 20 and detect 5 in that. 
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue; // ek bar maaf kardo like galati ho gayi contiune karo.. 
        
    }
   console.log(`Value of index is ${index}`);
   
    
}
