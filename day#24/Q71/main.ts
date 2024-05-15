// Question 71: Compare let and const: Create two examples where let allows reassignment
// but const does not. Try to reassign a const-declared variable and catch the error.

// Using `let` for a variable that can be reassigned
let color: string = "blue";
color = "red";
color = "pink";
console.log(color);

// Trying to reassign a `const`-declared variable
const colorShade: string = "black";
// colorShade = "white";  // This line will cause an error
console.log("Error: Can't reassign a `const`-declared variable.");

// This example illustrates that `const` prevents changing the variable once it's set.
