"use strict";
// Q58 - Write a simple program that can take lots of scores and find their average.
//   We add up all the scores, then divide by how many there are.
// This program calculates the average of all scores given
function avrgScore(...scores) {
    // Adds all scores together and divides by the number of scores
    let totalScore = scores.reduce((sum, score) => sum + score, 0); // sum of all numbers
    return totalScore / scores.length;
}
//   Example: finding the average of four scores
console.log(avrgScore(80, 84, 70, 79));
