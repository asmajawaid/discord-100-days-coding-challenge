// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list 
// that has only the words.


//arrey of mixed items
let mixedItems = ["yellow",9,"red",false, "green",5, "blue", 1,"pink",true]

//make a list of string words in array
let newArray = mixedItems.filter(item => typeof item === "string");

//print only strins items
console.log(newArray);






