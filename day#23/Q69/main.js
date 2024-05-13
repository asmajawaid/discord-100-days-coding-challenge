"use strict";
// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers
// and returns both the quotient and the remainder. Use an object to return both values.
function devideAndReminder(value1, value2) {
    let quotient = Math.floor(value1 / value2);
    let remainder = value1 % value2;
    return { quotient, remainder };
}
console.log(devideAndReminder(22, 5));
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
