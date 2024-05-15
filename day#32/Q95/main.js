"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of 
// numbers greater than 10.
let a = [1, 3, 5, 11, 13, 156, 7, 9,];
let result = a.filter((value) => {
    return value >= 10;
});
console.log(result);
