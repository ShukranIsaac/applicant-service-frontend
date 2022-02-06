// how to define an object literal
// let course = {}

// we have so far not added any properties to this object
// let course = {
//     id: 23,
//     name: "Web Design & Development"
// }

// console.log(course)

// Any object literal in JavaScript can contain functions
// besides other values ie. integers etc. Lets add methode named summary
let course = {
    id: 3,
    name: "Web Design & Development",
    description: "Modern Web Development",
    summary: () => {
        return "Summary Text";
    }
}
// const {id, ...rest} = course;
// console.log(id)
// console.log(rest)
// console.log(rest.summary())

// Thus far, all is working great
// But note the following
//      1. We have defined our summary function as an arrow function - ES6
//      2. Our function is not accessing any property defined in this object - course

// But what if we want the summary function to return
// text which is the concatenation of course name & description
course = {
    id: 3,
    name: "Web Design & Development",
    description: "Modern Web Development",
    summary: () => {
        return `${name}(${description})`;
    }
}
// const {id, ...rest} = course;
// console.log(id)
// console.log(rest)
// console.log(rest.summary())

// We run into issues where the application complains 
//  that some properties ie. description
// do not exist. So how do we solve this?

// The Javascript language defines the key word "this" 
// that gives us access to the object's context resources/properties. 
// Note: "this" key word does not exist in arrow functions. 
// Therefore, our function declaration too has to change
// too from arrow function to the old way of defining methods in javascript
// Hence the above code can be transformed liked below:
course = {
    id: 3,
    name: "Web Design & Development",
    description: "Modern Web Development",
    summary: function() {
        return `${this.name}(${this.description})`;
    }
}
// const {id, ...rest} = course;
// console.log(id)
// console.log(rest)
// console.log(rest.summary())

// However, instead of resolving our issue, we still stumble upon a somewhat similar error
// (undefined)

// Somehow, when the summary method is called, 
// the "this" or course context will already have been returned - "this" is lost along the way, 
// hence not exist at this point in time. 
// So we need to find the solution that keeps this object's context until the summary function has been invoked

// There exists two ways to solve this issue, One of which is the use of Function Binding
// that helps us to keep the context of the object we are trying to access its properties
//      - hence the object has to be bound to the function
const course = {
    id: 3,
    name: "Web Design & Development",
    description: "Modern Web Development",
    summary: function() {
        return `${this.name}(${this.description})`;
    }
}
// function binding
let mysummary = course.summary.bind(course);
console.log(mysummary())

// Or we can also define the same summary function
// outside the course object, still bind the object to it
// like below:
course = {
    id: 3,
    name: "Web Design & Development",
    description: "Modern Web Development"
}

// define method/function outside the course object
let summary = function() {
    return `${this.name}(${this.description})`;
}

// and bind course object to it
const funct = summary.bind(course);
// const {id, ...rest} = course;
// console.log(id)
// console.log(rest)
// console.log(funct())

// We can add new properties to objects
course.numberOfStudents = 100;
const size = function() {
    return this.numberOfStudents;
}
const classSize = size.bind(course)
// console.log(course)
// console.log(classSize())

// add new object property using a function
const addProperty = (function(key, value, object) {
    return ({
        ...object, // spread operator
        [key]: value // evaluated expression
    });
}).bind(course); // define function & bind course object to it

// console.log(addProperty("creditHours", 12, course));

// add new object property using a function
// In this function we combine the knowledge we have leraned so far accrued from previous
// concepts (Objects, function binding, Spread Operator etc. ) with one addition (Evaluated Expressions)
// to help us add more properties to our course object
const add = (function(key, value) {
    return ({
        ...this, // spread operator
        [key]: value // evaluated expression
    });
}).bind(course); // define function & bind course object to it

// console.log(add("author", "ShukranIsaac"));

// Assignment
// Given the following object definition
// const person = {};
// Write a function that takes a key & value values and adds them to an object (person) as key-value pair
// ie. myfu("name", "value") to { name:"John" }
// Write a second function that extends this behavior to two key-value pairs.
// And then, write the third function that extends this behavior by taking in any number of key-value pairs to be added to the person object.

/**
 * Arrays vs Objects
 */

// Array Definition
// const courses = new Array();
// or 
let courses = [
    {
        id: 0,
        code: "INF221",
        name: "Web Design & Development",
        description: "Web Design & Development - The Modern Web",
        yearOffered: 2020,
        semester: 2,
        creditHours: 12,
        numberOfStudents: 72
    },
    {
        id: 1,
        code: "COM121",
        name: "Introduction to Computer Programming",
        description: "Introduction to Computer Programming",
        yearOffered: 2020,
        semester: 2,
        creditHours: 12,
        numberOfStudents: 300
    },
    {
        id: 2,
        code: "COM222",
        name: "Advanced Programming",
        description: "Software Design Patterns & Principles",
        yearOffered: 2020,
        semester: 2,
        creditHours: 12,
        numberOfStudents: 72
    },
    {
        id: 3,
        code: "INF321",
        name: "Enterprise Business Intelligence",
        description: "Enterprise Applications In Business Development",
        yearOffered: 2020,
        semester: 2,
        creditHours: 12,
        numberOfStudents: 7
    }
];
// Array destructuring
const [c1, c2, ...rest] = courses;
// console.log(rest);

// Calculate the total number of students for all courses by summing them together
// 1. for-loop
let result = 0; // initial result to 0
for (let index = 0; index < courses.length; index++) {
    const element = courses[index];
    result = result + element.numberOfStudents;
}
// console.log(result)
// Similarly, defining our own function
const students = (object) => {
    let result = 0; // initial result to 0
    for (let index = 0; index < object.length; index++) {
        const element = object[index];
        result = result + element.numberOfStudents;
    }
    return result;
}
// console.log(students(courses));

// 2. reduce or reduceRight function instead of a for-loop
// const total = courses.reduce((prev, current) => prev + current.numberOfStudents, 0)
// console.log(total)
// console.log(courses.reduceRight((accummulated, current) => accummulated + current.numberOfStudents, 0))

// Rest parameters as arguments to functions
const nums = [23, 56, 34, 90, 567];
const sum = (...args) => {
    const r = args.reduce((result, current) => current + result, 0);
    return r;
}
// console.log(sum(nums))
// console.log(sum(...nums))
// console.log(sum(23, 56, 34, 90, 567))

// Assignment
// Using filter or map or reduce or a combination of any functions, 
// find the max or min value in the array
// Use this Knowledge to find the course with min or max number of students

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * Lab tutorials - Data Structures: Arrays & Objects
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const products = [
    {name:"Maluwa", category:"Soap", price:100, m_year:1981, ex_year:2003},
    {name:"Shumba", category:"Pesticides", price:20, m_year:1992, ex_year:2020},
    {name:"Maluwa", category:"Soap", price:200, m_year:2000, ex_year:2002},
    {name:"U-fresh", category:"Soap", price:500, m_year:2010, ex_year:2022},
    {name:"Kazinga", category:"Oil", price:240, m_year:2000, ex_year:2030},
    {name:"Sobo", category:"Juice", price:238, m_year:2009, ex_year:2019},
    {name:"Bicycle", category:"Hardware", price:198, m_year:2010, ex_year:2024},
    {name:"PC", category:"Hardware", price:200, m_year:2020, ex_year:2026},
    {name:"Miscrosoft Office", category:"Software", price:600, m_year:2016, ex_year:2018},
    {name:"Romeo & Juliet", category:"Book", price:800, m_year:2019, ex_year:2021},
    {name:"Extension", category:"Hardware", price:1000, m_year:2018, ex_year:2023},
    {name:"IPhone XP", category:"Phone", price:876, m_year:2017, ex_year:2028},
]

const ages = [23, 12, 45, 1, 2, 5, 34, 24, 30, 15, 19, 20, 10, 27, 89, 100, 56, 41]

// for-loop
// Print all products to the console
// for (let index = 0; index < products.length; index++) {
//     const product = products[index];
//     console.log(product.name)
// }

// forEach
// Print all products to the console
// products.forEach(function(product, index) {
//     console.log(index + ":" + product.name)
// });

// filter
// Demonstrate the use of both for-loop & filter
// Print all age values above 21, who can drive
// Filter products by category

// let canDrive = [];
// for (let index = 0; index < ages.length; index++) {
//     const element = ages[index]; // current product in the array, ages
//     // if above 21
//     if(element >= 21) {
//         // add to array
//         canDrive.push(element)
//     }
// }
// console.log(canDrive)

// const canDrive = ages.filter((function(age) {
//     if (age >= 21) {
//         return true;
//     }
// }))

// similarly the same function can be written as
// even shorter than the previous one
// const canDrive = ages.filter((age) => age >= 21);
// console.log(canDrive)

// log all ages above 21 at even index
// const canDrive = ages.filter((age, index) => (age >= 21) && (ages.length % index === 0));
// console.log(canDrive)

// const canDrive = ages.filter((age) => (age >= 21)); // filter age >= 21
// // then filter all ages at even index
// const evenIndex = canDrive.filter((age, index) => index % 2 === 0);
// console.log(evenIndex) // 23, 34, 30, 89, 56

// filter products by category
// const byCategory = products.filter(product => product.category === 'Juice');
// console.log(byCategory)

// Products which have already expired
// const expired = products.filter(product => product.ex_year < 2020);
// console.log(expired)

// Find products which have already expired 
// and had the longest shelf-life of 5years
// const expired = products.filter(product => product.ex_year < 2020)
//                 .filter(product => (product.ex_year - product.m_year) >= 5);
// console.log(expired)

// map

// Get all product names
// const productNames = products.map(function(product) {
//     return product.name;
// })
// console.log(productNames)
// const test = products.map(function(product) {
//     // ES6 template strings
//     return `${product.name} - ${product.category}`;
// })
// console.log(test)

// shortened version
// const test = products.map(product => `${product.name} - ${product.category}`)
// console.log(test)

// square all ages
// const squared = ages.map(age => Math.sqrt(age));
// console.log(squared)

// ages times 2
// const times = ages.map(age => age * 2);
// console.log(times)

// sort

// const sortedAgeDescending = ages.sort()
// console.log(sortedAgeDescending)

// const sortedAgeDescending = ages.sort(function(a, b) {
//     if (a < b) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(sortedAgeDescending)

// const sortedAgeAscending = ages.sort(function(a, b) {
//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(sortedAgeAscending)

// const sortedAgeAscending = ages.sort(function(a, b) {
//     return a > b ? 1 : -1;
// })
// console.log(sortedAgeAscending)

// const sortedAgeAscending = ages.sort((a, b) => a > b ? 1 : -1);
// console.log(sortedAgeAscending)

// const sortedAgeAscending = ages.sort(function(a, b) {
//     return a - b;
// })
// console.log(sortedAgeAscending)

// const sortedAgeAscending = ages.sort((a, b) => a - b);
// console.log(sortedAgeAscending)

// Order products by price
// const ordered = products.sort((a, b) => a.price - b.price);
// console.log(ordered)

// reduce

// total ages with loops
// let total = 0;
// for (let index = 0; index < ages.length; index++) {
//     total += ages[index];
// }
// console.log(total)

// const total = ages.reduce(function(result, current) {
//     return result + current;
// }, 0);
// console.log(total)

// const total = ages.reduce((result, current) => result + current, 0);
// console.log(total)

// Get the total amount of products
// const total = products.reduce((sum, current) => sum + current.price, 0);
// console.log(total)

// Combining functions

// to each product price add 100
// then, filter all products with price greater than 500
// then, sort ascending order
// finally, use reduce top sum all prices together
const combined = products
                    .map(product => product.price + 2999900000)
                    .filter(price => price >= 500)
                    .sort((a, b) => a - b)
                    .reduce(function(result, current) {
                        return result + current;
                    });

// console.log(combined)

// Challenge - Assignment
// Suppose the saler of these products increased price for each product category,
// each product different rate, 
// write a function that takes any pair of values(category & rate),
// and find the total profit(all product prices summed) 
// s/he could make for a particular increase.

/**
 * The Document Object Model
 */
