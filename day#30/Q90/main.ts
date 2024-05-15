// Question 90: Generating Random Numbers: Write a function that generates a random number
// between 1 and 10, inclusive.

// This function creates a random number between 1 and 10
function randomNumber() {
  return Math.floor(Math.random() * 10) + 1; // Scales up and rounds down
}
console.log(randomNumber());
// Each time you call this, you might get a different number. It's all up to chance!
