// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates 
// the area of a rectangle and refactor it into an arrow function.

//calculate area of rectangle
function areaOfRectangle(width:number, height:number):number{
    return width * height
};
//    Refactoring into an arrow function
let calculateAreaOfArrow =  (width:number, height:number) : number => width * height;

    
// log arrow function
console.log(calculateAreaOfArrow(7,9));




