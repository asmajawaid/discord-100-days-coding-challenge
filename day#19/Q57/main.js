"use strict";
// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
// list of grades
let grades = [88, 94, 72, 99, 53, 77];
//calculate the average grade
const sum = grades.reduce((totalSum, currentValue) => totalSum + currentValue);
//calculate average grade
const average = sum / grades.length;
//print average grade
console.log(average);
