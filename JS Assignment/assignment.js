/* 
Problem 1: Write a function to calculate the area of a triangle.

Formula: Area of triangle = base x height / 2
*/
function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        return "Base and height must be positive numbers";
    }
    return (base * height) / 2;
}
console.log(calculateTriangleArea(10, 5)); // Output: 25

/*
Problem 2: Write a function to convert degrees to radians.

As we know radians = degrees * (π / 180)
*/
function convertToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
console.log(convertToRadians(180)); // Output: 3.141592653589793

/*
Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

This recursive function calculates the factorial of a number. Factorial of a number is the product of all positive integers less than or equal to that number.
*/
function calculateFactorial(num) {
    if (num < 0) return "Please enter a non-negative number";
    if (num === 0 || num === 1) return 1;
    return num * calculateFactorial(num - 1);
}
console.log(calculateFactorial(5)); // Output: 120

/*
Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

This function checks if a number is prime. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
*/
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true

/*
Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

This function takes two arrays and merges them together using the spread operator.
*/
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]

/*
Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

This function checks if a year is a leap year. A leap year is exactly divisible by 4 except for end-of-century years which must be divisible by 400.
*/
function isLeapYear(year) {
    if (year % 4 !== 0) {
        return "Not Leap year";
    } else if (year % 100 !== 0) {
        return "This is a leap year";
    } else if (year % 400 !== 0) {
        return "Not Leap year";
    } else {
        return "This is a leap year";
    }
}
console.log(isLeapYear(2020)); // Output: This is a leap year

/*
Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

This function uses the filter() method to create a new array that only includes the first occurrence of each element from the original array. It checks the condition arr.indexOf(item) === index to ensure that only the first instance of each item is added to the result, effectively removing duplicates.

We could have also used return [...new Set(arr)]; 
*/
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 3, 1, 2])); // Output: [1, 2, 3]

/*
Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

This function converts a temperature from Fahrenheit to Celsius using the formula: (Fahrenheit - 32) * 5/9.
*/
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}
console.log(convertToCelsius(32)); // Output: 0

/*
Problem 9: Write a function to find the maximum of five numbers.
*/
function findMax(num1, num2, num3, num4, num5) {
    return Math.max(num1, num2, num3, num4, num5);
}
console.log(findMax(1, 2, 3, 4, 5)); // Output: 5

/*
Problem 10: Create a function called evenOdd() that takes a string as a parameter.

This function determines whether the length of a given string is even or odd and returns 'even' or 'odd' accordingly.
*/
function evenOdd(str) {
    return str.length % 2 === 0 ? 'even' : 'odd';
}
console.log(evenOdd('JavaScript')); // Output: even
console.log(evenOdd('Hello')); // Output: odd

/*
Answers to Theoretical Questions:

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
- 'if...else' statements are used when you have multiple conditions that need to be checked. They provide more flexibility and can evaluate expressions of any type.
- 'switch' statements are a cleaner way to write a block of 'if' statements that all test the same expression. It is usually more efficient and easier to read, especially for simple conditions based on the value of a single variable.

2. What is JavaScript, and what is its primary purpose in web development?
- JavaScript is a programming language that runs in the browser and can be used to create interactive and dynamic web pages. It works alongside HTML and CSS to enhance the functionality and user experience on websites. But nowadays JS is also used in various other fields as well like backend development, machine learning, embeded systems etc. So, it's becoming more general purpose.

3. Explain the difference between var, let, and const when declaring variables in JavaScript.
- 'var' declarations are globally scoped or function scoped, and they are hoisted to the top of their scope and initialized with 'undefined'.
- 'let' and 'const' are block-scoped. 'let' allows you to reassign values, while 'const' does not.
- 'const' is used to declare constants; values that are not supposed to change throughout the execution of the program.

4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
- Scope in JavaScript refers to the visibility or accessibility of variables.
- Global scope means the variable is available throughout the program, whereas local scope means the variable is only accessible within a specific function or block of code.

5. What is the difference between "null" and "undefined" in JavaScript?
- 'null' is an assignment value that represents no value or no object. It implies that the variable has been set to something that has no value.
- 'undefined' means a variable has been declared but not defined yet. It is also a value automatically assigned to variables that are just declared, or to formal arguments for which there are no actual arguments.
*/
