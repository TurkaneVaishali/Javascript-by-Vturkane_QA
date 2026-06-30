const name = "Seoul"
const repoCount = 50

// console.log(name+repoCount+" Value"); -- outdated syntax so do not use it instead use below one. 
console.log(`Hello my name ${name} and my repo count is ${repoCount}`); // it is called string interpolatation
// how to declare the string? 
const gameName = new String("South-Korea players")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // this did not changed our original String.
console.log(gameName.charAt('6'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 6)
console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // use trim to remove unwanted spaces eg - customer give input with spaces, we can remove it with trim function. 
/* he trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd(). */

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'))






