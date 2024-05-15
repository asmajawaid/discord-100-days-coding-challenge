//Question 78: Function Expressions vs. Function Declarations: Compare function expressions
//  and declarations by creating one of each that performs the same task, such as squaring
// a number.

// Function declarations
function declarations(value1: number) {
  return value1 * value1;
}
console.log(declarations(2));

// Function expression for squaring a number
let expressions = function (number0: number): number {
  return number0 * number0;
};
console.log(expressions(2));

// Both methods give us the same result, showing two different ways to create functions
// that do the same thing.
