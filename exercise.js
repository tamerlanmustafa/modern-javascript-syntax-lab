// Exercise 1

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const newArray = nums.map(num => {
    return num*2
})

console.log('Exercise 1:', newArray)

// Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstFruit, secondFruit] = pizzaToppings

console.log('Exercise 2:', firstFruit, secondFruit)

// Exercise 3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
// Your code here

const {make, model} = car

console.log('Exercise 3:', make, model)

// Exercise 4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const controversialPizzaToppings = [...pizzaToppings2]
console.log('Exercise 4:' , controversialPizzaToppings)

// Exercise  5

// Duplicate the following object and spread its values into a new variable `myCar`.

const cars = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  
const myCar = {...cars}

myCar.model = "q7"

console.log('Exercise 5:', cars, myCar)

// Exercise 6

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = 'username'
const userProfile = {
    [propertyName] : 'Oscar'
}

console.log('Exercise 6: ', userProfile)