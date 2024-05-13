// Q66 - Logical AND Verification: Create a function that checks two boolean 
// (true or false) values. It should only say true if both are true, using the && 
// operator. For instance, checkBothTrue(true, false) should be false.

function checkBothTrue(a:boolean,b:boolean):boolean {
    // only print true when both value is true
    return a && b
};
//trying with true and false so print false
console.log(checkBothTrue(true,false));
// It checks two things, but since one is false, the answer is false.