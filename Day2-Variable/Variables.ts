/* 
var vs let vs const

1) Scope
2) Declaration/Value assignment
3) Re-declaration
4) Re-initialization
5) Hoisting 
*/

// 1).Scope: Accessible area (Functional scope {var} and Block scope {let, const})
// ###############################################################################

// Example-1: var (Functional Scope)
function varScope() {
    if (true) {
        var msg = "Hello, World!";
        console.log("Inside the block: " + msg); // Accessible here
    }
    console.log("Outside the block: " + msg); // Still accessible here due to function scope of var
}

varScope();

// Example-2: let (Block Scope)
function blockScope(){
    if (true) {
        let letMsg = "Hello Let!!";
        const constMsg = "Hello Const!!";
        console.log("Inside the block: " + letMsg); // Accessible here
        console.log("Inside the block: " + constMsg); // Accessible here
    }
    // console.log("Outside the block: " + letMsg); // Error: letMsg is not defined
    // console.log("Outside the block: " + constMsg); // Error: constMsg is not defined    
}

blockScope();

// 2).Declaration/Value assignment
// ###############################

// Example-1: var can be declared without initialization
var x;
console.log("Value of x before assignment: "+ x); // Output: undefined
x = 25;
console.log("Value of x after assignment: "+ x); // Output: 25

// Example-2: let can be declared without initialization
let y;
console.log("Value of x before assignment: "+ y); // Output: undefined
y = 55;
console.log("Value of x after assignment: "+ y); // Output: 55

// Example-3: const must be initializted at the time of declaration
const z: number = 100;
console.log("Value of x before assignment: "+ z); // Output: undefined
// z = 55; // Not allowed to reassign the value for CONST type


// 3) Re-declaration
// #################
// var - allowed to redeclare the value
// let & const - not allows to redeclare the value (making code safer)

// Example-1: var allows re-declaration
var city = "New york";
var city = "Los Angels"
console.log("City: "+ city);

// Example-2: let not allowed re-declaration
let country = "India";
// let country = "US"; // Re-declaration not allowed and throw the compile time error
console.log("Country: "+ country);

// Example-3: const not allowed re-declaration
let state = "Tamilnadu";
// let state = "Kerala"; // Re-declaration not allowed and throw the compile time error
console.log("State: "+ state);

// 4) Re-initialization/Re-assignment
// ##################################

// var & let - Re-assignment allowed
// const - Re-assignment not allowed

// Example-1: var allows re-assignment
var age = 25;
age = 30;
// age = "thirty"; // however different data type is not allowed in typescript. This is called typesafty.
console.log("Age: "+age);

// Example-2: let allows re-assignment
let time = 9.15;
time = 12.30;
console.log("Time: "+ time);

// Example-3: const not allows re-assignment
const date = 18;
// date = 23; // re-assignment not allowed and throw the compile time error
console.log("Date: "+date)

// 5) Hoisting
// #################

// var - Hoisted with undefined error
// let - Hoisted with initialization error

// console.log(a); // Undefined error
// console.log(b); // Initialization error
// console.log(c); // Initialization error
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);