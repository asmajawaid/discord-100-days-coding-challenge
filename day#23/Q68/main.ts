// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and 
// returns their product. Round the result to two decimal places.

 // Multiplies the numbers and rounds the result to two decimal place
function MultiplyingDecimal(value1:number,value2:number):number {
    return Math.round(value1*value2*100) / 100
};

console.log(MultiplyingDecimal(0.2,0.1));
// After multiplying, we round to make the result easier to read

