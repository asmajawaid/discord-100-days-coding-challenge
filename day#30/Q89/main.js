"use strict";
// Question 89: Rounding Numbers: Create a function that takes a number with decimals 
// (e.g., 3.14159) and rounds it to two decimal places.
function roundingValue(value) {
    return value.toFixed(2); // Rounds and converts back to number
}
;
console.log(roundingValue(3.14159)); //3.14
