"use strict";
// Question 71: Compare let and const: Create two examples where let allows reassignment 
// but const does not. Try to reassign a const-declared variable and catch the error.
let color = "blue";
color = "red";
color = "pink";
console.log(color);
const colorShade = "black";
// try {
//        colorShade = "white";  // This line will cause an error
// } catch (error){
console.log("Error: Can't reassign a `const`-declared variable.");
// }
