"use strict";
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates 
// the area of a rectangle and refactor it into an arrow function.
//calculate area of rectangle
function areaOfRectangle(width, height) {
    return width * height;
}
;
//    
let calculateAreaOfRectangle = (width, height) => width * height;
console.log(calculateAreaOfRectangle(7, 9));
