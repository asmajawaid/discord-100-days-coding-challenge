"use strict";
// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, 
// trucks, and motorcycles using enums, and show one example.
// Making a list (enum) for different types of vehicles
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["bike"] = 1] = "bike";
    vehicles[vehicles["truck"] = 2] = "truck";
})(vehicles || (vehicles = {}));
;
// Showing one type of vehicle from the list
console.log(vehicles.cars); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
