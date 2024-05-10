"use strict";
//Q.47  Advanced Array Destructuring: Given an array of objects re+presenting different laptops,
// each with proprities make,model, and year, use array destructuring to assign the first and second
// laptops to variables. Then,log these vRIABLES.
let laptops0 = [
    { make: "hp", model: "core i3", year: 2020 },
    { make: "apple", model: "macBook", year: 2021 },
    { make: "Dell", model: "xi12", year: 2022 },
];
var laptop1 = laptops0[0], laptop2 = laptops0[1];
// let [laptop1:any, laptop2:any,] = laptops;
console.log(laptop1);
console.log(laptop2);
