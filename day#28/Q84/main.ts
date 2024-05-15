// Question 84: Replacing Text in a String: Write a function that takes a sentence and
// replaces all instances of the word "JavaScript" with "TypeScript".

// This function swaps "JavaScript" with "TypeScript" in a sentence
function replacing(value1: string): string {
  // Uses a regular expression with the 'g' flag for a global replacement
  return value1.replace(/Javascript/g, "Typescript"); // if you write gi, thats change whole the words not a sentence.
}
console.log(
  replacing(
    "I love Javascript. Javascript is a computer language. javascript.javascript"
  )
);
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" words in the sentence is changed to "TypeScript". only one sentance
