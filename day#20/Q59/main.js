"use strict";
// Q59 - Add a Special Number: Make a program that creates custom adders. 
// These adders can add a specific number to any other number you give them later.
// This program makes a function that adds a specific number
// This is the magic box. It takes a number and adds your special number to it
function adders(add) {
    let magicBox = add + 3;
    console.log("add number in magic box", magicBox);
}
adders(100);
// If we put 10 in the box, it gives us 13
// We made a function (magic box) that adds 3 to any number
