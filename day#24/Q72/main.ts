// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code 
// block with {} that uses both let and const. Show how variables declared inside the block 
// are not accessible outside of it.

//Demonstrating block scop
{
    let food = "omlete";
    const fruit = "leeche";
    console.log(food);
    console.log(fruit);
}
//  console.log(food); // print error
//  console.log(fruit); // print error
 
// This shows that `let` and `const` keep variables safe inside the block where they're defined.