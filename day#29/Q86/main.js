"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word 
// "JavaScript" is present in a given string. It should return true if found, 
// otherwise false.
function CheckingPresence(value) {
    return value.includes("Typescript");
}
;
console.log(CheckingPresence("TypeScript is the world's most popular programming language."));
console.log(CheckingPresence("I love Typescript."));
// It simply says true if "TypeScript" is there, or false if it's not. true or false based on the check
