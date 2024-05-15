// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters
// from a string.

// This function takes out the first 25 characters from any text
function Demonstrate(value: string) {
  return value.substring(0, 25); //pass two or one value
}
console.log(
  Demonstrate(
    "Substring is commonly used method String class that is used to create smaller strings from the bigger one."
  )
);
// It gives us a smaller piece of the original text, just the beginning part.