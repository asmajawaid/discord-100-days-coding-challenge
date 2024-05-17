"use strict";
// Question 104: Create a function that generates a random hexadecimal color code.
function randomHexColor() {
    const color = "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(16);
    //   .padstart(6, 0);
    return color;
}
console.log(randomHexColor());
