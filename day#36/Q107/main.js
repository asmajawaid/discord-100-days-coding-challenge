"use strict";
// Question 107: Write a condition using logical operators that checks if a number is 
// divisible by both 2 and 3.
function logicalOperator(value) {
    return value % 2 === 0 && value % 3 === 0;
}
;
console.log(logicalOperator(6)); //true
console.log(logicalOperator(9)); //false
