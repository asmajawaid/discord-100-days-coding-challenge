// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. 
// Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and 
// b becomes 5.

// This function swaps the values of two variables
function swapValue() {
    let a= 5;
    let b =10;
    console.log("Before swap a=",a , "b=",b );

    let temporalyStoreVariable = a; // Temporarily stores the value of a
    a=b;                             // Sets a to b's value
    b= temporalyStoreVariable;  // Sets b to a's original value stored in temp
    console.log("After swap a=",a , "b=",b );
}
swapValue();
// We use a temporary variable to hold one value while we swap them, like a magic trick!