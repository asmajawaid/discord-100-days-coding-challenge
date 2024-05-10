"use strict";
//Q.46 Enhanced laptop object: construct an aobject for a laptop including properties make, model, 
// year, and a method describe() that logs a sentence about the laptop.
let laptops = {
    make: "hp",
    model: "core i3",
    year: 2020,
    describe: function () {
        console.log(`This laptop is ${this.year}, ${this.make}, and model ${this.model}.`);
    }
};
laptops.describe();
// console.log(`This laptop is ${laptop.year}, ${laptop.make}, and model ${laptop.model}class employee {
