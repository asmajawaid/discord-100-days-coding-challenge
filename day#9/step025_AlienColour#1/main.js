// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called
//  alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green";
// • Write an if statement to test whether the alien’s color is green. 
// If it is, print a message that the player just earned 5 points.
if (alien_color === "green") {
    console.log("Alien color is green so player just earnd 5 points!");
}
// • Write one version of this program that passes the if test and another that fails.
alien_color = "yellow";
//  (The version that fails will have no output.)
if (alien_color === "green") {
    console.log("player just earnd 5 points!");
}
export {};
