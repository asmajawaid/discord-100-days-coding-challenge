"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the 
// first occurrence of the word "code" within any given string and returns its position.
function Position(value) {
    return value.indexOf("code");
}
;
console.log(Position("Learn to code with javascript.")); //9
console.log(Position("Figure out why you want to learn to code..")); //36
console.log(Position("the code.")); //4
// It tells us the position number where "code" starts.
