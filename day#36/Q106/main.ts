// Question 106: Determine if a given year is a leap year using comparison operators.

function leapYear(year:number):boolean {
    return (year % 4 === 0 && year % 100 !==0) || year % 400 ==0
};
console.log(leapYear(1900)); //false 
console.log(leapYear(2024)); //true


// the year number must be divisible by four – except for end-of-century years, which must
// be divisible by 400.
