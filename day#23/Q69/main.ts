// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers
// and returns both the quotient and the remainder. Use an object to return both values.

function devideAndReminder(
  value1: number,
  value2: number
): { quotient: number; remainder: number } {
  let quotient = Math.floor(value1 / value2);
  let remainder = value1 % value2;
    // Returns both in an object
  return { quotient, remainder };
}
console.log(devideAndReminder(22, 5));// Shows { quotient: 4, remainder: 2 }
// It shows how many times 5 goes into 22, and what's left over.



function divideAndRemainder(
    dividend: number,
    divisor: number
  ): { quotient: number; remainder: number } {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
  }
  
  // Trying it with 10 divided by 3
  console.log(divideAndRemainder(10, 3)); 