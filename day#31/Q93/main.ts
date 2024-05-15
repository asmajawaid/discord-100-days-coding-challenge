// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

let fruitsList:string [] = ["apple","banana","orange"];
console.log("index of Banana is",fruitsList.indexOf("banana"));
fruitsList.splice(1,1,"mango");
console.log("replace the banana and print new array",fruitsList);

