// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a 
// student's score.

function grade(score:number):string {
    if (score >= 90) {
        return "A"
    } else if( score >= 80 ){
        return "B"
    }else if(score >= 70){
         return "C"
    } else if (score >= 60){
        return "D"
    }else if (score >= 50){
        return "E"
    }else {
        return "fail"
    }
};
console.log(grade(95));
console.log(grade(39));
console.log(grade(80));

