//Question 88: Converting Strings to Numbers: Write a function that takes a string 
// representation of a number (e.g., "123") and converts it into an actual number type.

// This function turns text into an actual number
function ConvertingString(value:string):number {
    return Number(value);
};
console.log(ConvertingString("12345"));
