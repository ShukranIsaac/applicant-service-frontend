
// find the maximum of two numbers
const max = (val1, val2) => {
	if(val1 !== 0 && val2 !== 0) {
		if(val1 > val2) {
			return val1;
        } else if(val1 === val2) {
            return 'equal';
        } else {
            return val2;
        }
    }
};



// function min(val1, val2) {

//     if (val1 < val2) {
//         return val1;
//     } else {
//         return val2;
//     }

// }

// const min = function(val1, val2) {
//     if (val1 < val2) {
//         return val1;
//     } else {
//         return val2;
//     }
// }

const min = (val1, val2)  => {
    if (val1 < val2) {
        return val1;
    } else {
        return val2;
    }
}

// console.log(min(23, 12))

// take two numbers and perform addition on them
const addition = (a, b) => {
    return a + b;
}

// take two numbers and perform addition on them
const subtraction = (a, b) => {
    return a - b;
}

// passing functions as parameters
// const perform = (callback) => {

//     return callback;

// }

// anonymous function
(function() {
    // some code here
    console.log(confirm("Anonymous function?"));
})(); // note how the function is called

// perform
// console.log(perform(subtraction(12, 34)));

/**
 * Here we have created a function that takes 
 * some list of something and a function as argument. 
 * It will go through the list and apply the provided function on each element, 
 * storing the returned value from the function in results.
 */
const perform = (callback, list) => {
    let result = [];
    for (let index = 0; index < list.length; index++) {
        result.push(callback(list[index]))
    }
    return result;
}

const increment = (ele) => {
    return ++ele;
}

const fibonacci = (element) => element <= 1 ? 1 : fibonacci(element-1) + fibonacci(element-2);


console.log(perform(increment, [1,2,3,4,5]));

console.log(perform(fibonacci, [1,2,3,4,5]));

var factorial = function(number) {
    if (number <= 0) { // terminal case
        return 1;
    } else { // block to execute
        return (number * factorial(number - 1));
    }
};
console.log(factorial(6));
// 720

// var example;
// let example;
// const example;

var number = 12;
let myString = "some string";
const example = "some string";

// es6 way
const myFunction = () => {
    // some code here
    console.log("My second named function");
}

// array definition
let names = ['John', 'James', 'Joyce', 'Jane'];
// length
console.log(names.length); // log  4
// access element at index 0
console.log(names[0]); // log John
// access element at index 2
console.log(names[2]); // log Joyce
// access element at index 5
console.log(names[5]); // undefined, why?


let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]
let pos = 1, n = 2;
let removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.
console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems); 
// ["Turnip", "Radish"]

// object definition
let course = {
    id: 0,
    name: 'INF221',
    description: 'Web Design and Development',
}
// print the object
console.log(course);
// access a variable
console.log(course.name);
// change value of variable
console.log(course.name = 'Web Development');

// add a new variable # of students and initialize it with 62
course.numberOfStudents = 62;
// console.log(course)

// list of course objects
let courses = [
    {
        id: 0,
        name: 'INF221',
        description: 'Web Design and Development',
        numberOfStudents: 62
    },
    {
        id: 1,
        name: 'COM121',
        description: 'Intro. to Computer Programming',
        numberOfStudents: 200
    },
    {
        id: 2,
        name: 'COM222',
        description: 'Advanced Programming',
        numberOfStudents: 80
    },
];

let [n00, n01, n02, n03] = courses;

console.log(n00);
console.log(n01);


// higher order function
const CustomMath = (() => {
    /**
     * Here we have created a function that takes 
     * some list of something and a function as argument. 
     * It will go through the list and apply the provided function on each element, 
     * storing the returned value from the function in results.
     */
    const perform = (callback, list) => {
        let result = [];
        for (let index = 0; index < list.length; index++) {
            result.push(callback(list[index]))
        }
        return result;
    };

    // fibonacci
    const fibonacci = (element) => element <= 1 ? 1 : fibonacci(element-1) + fibonacci(element-2);

    // find the maximum of two numbers
    const max = (val1, val2) => {
        if(val1 !== 0 && val2 !== 0) {
            if(val1 > val2) {
                return val1;
            } else if(val1 === val2) {
                return 'equal';
            } else {
                return val2;
            }
        }
    };

    // factorial of a number
    var factorial = function(number) {
        if (number <= 0) { // terminal case
            return 1;
        } else { // block to execute
            return (number * factorial(number - 1));
        }
    };

    // min between two numbers
    const min = (val1, val2)  => {
        if (val1 < val2) {
            return val1;
        } else {
            return val2;
        }
    };
    
    // console.log(min(23, 12))
    
    // take two numbers and perform addition on them
    const addition = (a, b) => {
        return a + b;
    };
    
    // take two numbers and perform addition on them
    const subtraction = (a, b) => {
        return a - b;
    };

    // return new functions
    return {
        perform,
        fibonacci,
        max,
        factorial,
        min,
        addition,
        subtraction,
    }

})();

console.log(CustomMath.addition(23, 34))
console.log(CustomMath.factorial(4))
console.log(CustomMath.max(34, 12))
console.log(CustomMath.perform(CustomMath.fibonacci, [2,3,5,9,10]));