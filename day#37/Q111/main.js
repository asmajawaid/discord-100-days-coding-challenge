"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, 
// teenager, adult).
function personsAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
;
console.log(personsAge(12));
console.log(personsAge(18));
console.log(personsAge(25));
