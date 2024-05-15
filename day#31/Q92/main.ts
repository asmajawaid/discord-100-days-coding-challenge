// Question 92: Write a function to remove the last element from an array and return the 
// removed element.

// This function removes the last element from an array and returns it
function removeAndReturn(arr:string[]) {
    return arr.pop()
}
let fruits:string [] = ["apple","banana","orange"];
console.log(removeAndReturn(fruits));

console.log(fruits);
// Here, we take out the last fruit and show the updated list.