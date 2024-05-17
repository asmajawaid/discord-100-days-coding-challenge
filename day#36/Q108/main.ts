// Question 108: Compare two strings to check if they are identical, ignoring case 
// sensitivity.

function comparison(value1:string,value2:string):boolean {
    return value1.toLowerCase() === value2.toLowerCase();

};
console.log(comparison("HELLO", "hello")); //true
console.log(comparison("HELLO", "world")); //false

