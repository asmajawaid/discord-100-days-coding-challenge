// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a 
// number and a string that represents a number (e.g., "5"). Return their sum as a number.

function ArithmeticMtype(a:number, b: string):number {
    return a + Number(b)
}
console.log(ArithmeticMtype(10 ,"5"));
