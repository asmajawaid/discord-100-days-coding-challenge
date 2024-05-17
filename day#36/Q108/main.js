"use strict";
// Question 108: Compare two strings to check if they are identical, ignoring case 
// sensitivity.
function comparison(value1, value2) {
    return value1.toLowerCase() === value2.toLowerCase();
}
;
console.log(comparison("HELLO", "hello"));
console.log(comparison("HELLO", "world"));
