"use strict";
// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
//define a function that accept multiple hobbies as a argument
function multipleHobbies(...hobbies) {
    hobbies.forEach((hobby) => {
        //log a statement with each hobby
        console.log(`you enjoy ${hobby}.`);
    });
}
//call the function with three arguments
multipleHobbies("reading", "walking", "gardening");
