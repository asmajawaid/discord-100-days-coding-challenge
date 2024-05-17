// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// We format the date in a custom format 
function todayDate(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0"); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;

};
console.log(todayDate());
// We can use the new Date() constructors and call the specific get() methods to get the 
// other date and time parts.
// getDate(): returns the day of the month (1 – 31).
// getDay(): returns the day of the week (0 – 6).
// getMonth(): returns the month (0 – 11).
// getYear(): returns the year (usually 2–3 digits).