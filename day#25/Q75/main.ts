// Question 75: Compound Assignment Operators: Use compound assignment operators to
// simplify arithmetic operations. Start with x = 4 and perform a series of operations
// (addition, subtraction, multiplication, division) on x using compound operators.

// This function uses compound assignment operators for different operations
function compoundOperators() {
  let x = 4;
  console.log("Initialized value x:", x); //4
  x += 4;
  console.log("After addition of value x:", x); //8
  x -= 2;
  console.log("After subtraction of value x:", x); //6
  x *= 3;
  console.log("After multiplication of value x:", x); //18
  x /= 2;
  console.log("After division of value x:", x); //9
}
compoundOperators();

// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.
