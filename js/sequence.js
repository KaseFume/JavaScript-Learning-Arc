//data declaration

var a=1 //global scope
//Try to avoid using Var, it can cause logic errors in your codes.

const b=2 // block scope
// const and let are block scoped, they can't be accessed outside the block they are declared in.
let c=3 // block scope
console.log(a,b,c)

//Arithmetic Operators
var num1 = 10;
var num2 = 5;
console.log(num1 + num2); // Output: 15
console.log(num1 - num2); // Output: 5
console.log(num1 * num2); // Output: 50
console.log(num1 / num2); // Output: 2
console.log(num1 % num2); // Output: 0
//Assignment Operators
var num1 = 10;
var num2 = 5;
console.log(num1 += num2); // Output: 15
console.log(num1 -= num2); // Output: 5
console.log(num1 *= num2); // Output: 50
console.log(num1 /= num2); // Output: 2
//Comparison Operators
console.log(10 == 5); // Output: false
console.log(10 != 5); // Output: true
console.log(10 === 5); // Output: false
console.log(10 !== 5); // Output: true
//Logical Operators
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(true || false); // Output: true
console.log(!true); // Output: false
//Bitwise Operators
console.log(5 & 3); // Output: 1
console.log(5 | 3); // Output: 7
console.log(5 ^ 3); // Output: 6
//Conditional Operators
console.log(5 > 3); // Output: true
console.log(5 < 3); // Output: false

//multi-line comment
/*
This is a multi-line comment
It can span multiple lines
*/

//data types
//number
var num = 10;
console.log(num); // Output: 10
//string
var str = "Hello, World!";
console.log(str); // Output: Hello, World!
//boolean
var bool = true
console.log(bool); // Output: true
//null
var nullVar = null;
console.log(nullVar); // Output: null
//undefined
var undefinedVar;
console.log(undefinedVar); // Output: undefined
//differences  between undefined and null
//undefined is a type, null is a value
//typeof operator
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object

//object
var person = {
    name: "John Doe",
    age: 30
    };
    console.log(person); // Output: { name: 'John Doe', age: 30 }

//data structures
//arrays
var colors = ["red", "green", "blue"]
console.log(colors); // Output: [ 'red', 'green', 'blue' ]
//objects
var person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
        }
        };

        console.log(person); // Output: { name: 'John Doe', age: 30,
        //arrays and objects can be nested

//other data structures
//sets
var set = new Set([1, 2, 3, 4, 5]);
console.log(set); // Output: Set { 1, 2, 3, 4
//maps
var map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
    ]);
    console.log(map); // Output: Map { 'key1' => 'value1',
    //sets and maps can be used to store unique values
//Difference between sets and maps
//sets are unordered collections of unique values
//maps are unordered collections of key-value pairs

//stacks
var stack = [];
console.log(stack); // Output: []
stack.push(1);
console.log(stack); // Output: [ 1 ]
stack.push(2);
console.log(stack); // Output: [ 1, 2 ]
//stacks are LIFO (last in, first out) data structures

//queues
var queue = [];
console.log(queue); // Output: []
queue.push(1);
console.log(queue); // Output: [ 1 ]
queue.push(2);
console.log(queue); // Output: [ 1, 2 ]
//queues are FIFO (first in, first out) data structures

//2D array
var arr = [[1, 2, 3], [4, 5, 6]]
console.log(arr); // Output: [ [ 1, 2, 3 ], [4, 5, 6]]
//2D arrays can be used to represent matrices or tables of data

//Linked List
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
            }
            }
            }
            console.log(list); // Output: { value: 1, next: { value: 2 , next: { value: 3, next: null } } }

//3D array
var arr3D = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12 ]]]
console.log(arr3D); // Output: [ [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], [ [ 7, 8, 9 ], [ 10, 11, 12 ] ] ]
//3D array explanation, Application
//3D arrays can be used to represent cubes or matrices of matrices.
//They can be used in various applications such as computer graphics, scientific computing, and data analysis.

//functions and many ways to write in js
//1. Function declaration
function add(a, b) {
    return a + b;
    }
    console.log(add(1, 2)); // Output: 3
//2. Function expression
var add = function(a, b) {
    return a + b;
    }
    console.log(add(1, 2)); // Output: 3
//3. Arrow function
var add = (a, b) => a + b;
console.log(add(1, 2)); // Output: 3

//looping in js
//1. For loop
for (var i = 0; i < 5; i++) {
    console.log(i);
    }
    // Output: 0, 1, 2, 3, 4
//2. While loop
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
    }
    // Output: 0, 1, 2, 3, 4
//3. Do-while loop
var i = 0;
do {
    console.log(i);
    i++;
    }
    while (i < 5);
    // Output: 0, 1, 2, 3, 4

//types of condition in js
//1. If-else statement
if (true) {
    console.log('Condition is true');
} else{
    console.log('Condition is false');
    }
    // Output: Condition is true
//2. Switch statement
switch (1) {
    case 0:
        console.log('Value is 0');
    case 1:
        console.log('Value is 1');
    default:console.log('Default case');
    }
// Output: Value is 1, Default case
// Default explanation
// In the switch statement, the value of the expression is compared with the values of the case labels . If there is a match, the code associated with that case is executed. If there is no match, the code associated with the default label is executed. If there is no default label, the switch statement simply ends.

//Try Exception
try {
    console.log('Trying to divide by zero');
    var x = 5 / 0;
    }
    catch (error) {
        console.log('Caught an error:', error.message)
            }

//Importig modules and packages
//1. Importing modules
import { add, multiply } from './math.js';
console.log(add(5, 10)); // Output: 15
console.log(multiply(5, 10)); // Output: 50
