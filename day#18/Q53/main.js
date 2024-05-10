"use strict";
// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows 
// what a computer programmer knows, like coding languages, tools, and software frameworks. 
// Find a way to get three specific skills from this list and show them.
// making a programmer skill list
let programmer = {
    codingLanguage: ["typescript", "java", "python"],
    tools: ["VSCode", "Git for version control", "npm (Node Package Manager)"],
    frameworks: ["BootStrap", "Next,js", "Flask"],
};
//A way to get three specific skills from list
let { codingLanguage, tools, frameworks } = programmer;
console.log(` languages:  ${codingLanguage}, \n tools:  ${tools}, \n frameworks:  ${frameworks}.`);
