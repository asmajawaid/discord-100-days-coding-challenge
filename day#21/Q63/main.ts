// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle 
// using a special type alias, including properties unique to each shape.

type shape = {
    kind: "circle" | "Rectangle",
    radius ?: number; //only for circle
    height ?: number;
    weidth ?: number;
};
let circle:shape ={
    kind: "circle",
    radius: 5,
};
let Rectangle : shape = {
    kind : "Rectangle",
    height: 10,
    weidth: 30,
};
console.log(circle);
console.log(Rectangle);
