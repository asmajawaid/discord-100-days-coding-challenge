// Question 80: Updating Object Properties: Add a property named color to the existing car 
// object, and then update the year property to 2021. Show how to perform these operations.


  // Adding a new property 'color' and updating 'year'
 let car: {[key : string]: any} = {
    make:"HONDA",
    model: "A30DO",
    year: 2024
};
 car.color = "black";
 car.year = 2021;
 console.log(car); // Outputs the car object with the new color and updated year
  