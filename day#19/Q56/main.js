"use strict";
// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list 
// that has only the words.
let mixedItems = ["yellow", 9, "red", false, "green", 5, "blue", 1, "pink", true];
//make a list of numbers in array
let newArray = mixedItems.filter(item => typeof item === "string");
console.log(newArray);
