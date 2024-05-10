// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make 
// a new list where each number is twice its original value.

//make a list of numbers in array
let arr= [ 2, 4, 6, 8, 10, 12 ]

//make a list of twice numbers on its original value in array 
let a =  arr.map((value)=>{
    console.log("old array", value);
    return value * 2 

})
//print a twice value array
console.log(`new array ${a}`);




