"use strict";
// Question 75: Compound Assignment Operators: Use compound assignment operators to 
// simplify arithmetic operations. Start with x = 4 and perform a series of operations 
// (addition, subtraction, multiplication, division) on x using compound operators.
// This function uses compound assignment operators for different operations
function compoundOperators() {
    let x = 4;
    console.log("Initialized value x:", x);
    x += 4;
    console.log("After addition of value x:", x);
    x -= 2;
    console.log("After subtraction of value x:", x);
    x *= 3;
    console.log("After multiplication of value x:", x);
    x /= 2;
    console.log("After division of value x:", x);
}
compoundOperators();
