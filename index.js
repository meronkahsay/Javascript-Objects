// Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees. Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list.

function Employee(name,position,salary){
    this.name=name;
    this.position =position;
    this.salary=salary;
}
const employees = [new Employee( "Berihu",  "Farmer", 200), new Employee("Kamaue", "Teacher",  300 ), new Employee (  "Steve","Developer",  500 ), new Employee(  "Rose", "Developer",  600 ), new Employee( "Lily",  "Developer",  700 )]

employees.forEach(employe => {
                if (employe.position == "Developer") {
                    employe.salary += (employe.salary * 0.1)
                    console.log(`The updated salary list is:${employe.salary}`);
                };})
console.log(employees);

// Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the products that are inStock: true, and sort the available products by price in ascending order.

const products = [{ name: "T-shirt", price: 850, instockProperties: "Available" }, { name: "Trouser", price: 800, instockProperties: "Available" }, { name: "Dress", price: 129, instockProperties: "Not Available" }]
function productsInStock(products) {
    const newProducts = [];
    products.forEach(product => {
        if (product.instockProperties === "Available") {
            newProducts.push(product)
    
        }
    
  }  )
  newProducts.sort((a, b) => a.price - b.price);

  console.log(newProducts);

  
}

productsInStock(products)

// Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name.

// Grades object
const grades = {
    Meron: [90, 85, 78, 92],
    Semhal: [60, 65, 70, 58],
    Hewan: [88, 76, 95, 89],
    Elias: [45, 50, 55, 60]
};

function calculateGrades(grades) {
    for (const student in grades) {
        const scores = grades[student];
        const total = scores.reduce((sum, score) => sum + score, 0); 
        const average = total / scores.length; 
        const status = average > 70 ? "Pass" : "Fail"; 
        console.log(`${student}: Average = ${average}, ${status}`);
    }
}

calculateGrades(grades);
// Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users.

function User(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}

const users = [
    new User("Danu", "danu@email.com", true),
    new User("Abel", "abel@gmail.com", false),
    new User("Mahder", "mahder@gmail.com", true),
];

const activeUsers = users.filter(user => user.isActive);

console.log("Active Users:");
activeUsers.forEach(user => console.log(user.username));


// You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance".

const destinations = [
    { name: "Paris", distance: 500, budgetRequired: 1000 },
    { name: "Rome", distance: 1000, budgetRequired: 1200 },
    { name: "Berlin", distance: 800, budgetRequired: 900 },
    { name: "Vienna", distance: 200, budgetRequired: 600 },
    { name: "Prague", distance: 300, budgetRequired: 700 }
];

function findDestinations(maxDistance, budget) {
    const availableDestinations = destinations.filter(destination => 
        destination.distance <= maxDistance && destination.budgetRequired <= budget
    );

    if (availableDestinations.length === 0) {
        return "No destinations available under your budget and distance";
    }

    return availableDestinations;
}

const maxDistance = 800; 
const budget = 950; 

const result = findDestinations(maxDistance, budget);
console.log(result);