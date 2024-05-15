"use strict";
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all 
// numbers in an array.
let arr = [1, 2, 3, 4, 5];
let reduce_function = (value1, value2) => {
    return value1 + value2;
};
let newarr = arr.reduce(reduce_function);
console.log(newarr);
