/*
1) Premitive Data Types (Buit-in) -- we can store only single value in the datatype
Number
String
Boolean
Null
Undefined
Any
Union Type
Void

2) Non-Premitive Data Types (Objects) -- we can store more than one value (or) group of values (or) group of objects
Array
Class
Function
Interface
Touple..etc
*/

// 1) NUMBER DATA TYPE - Representing both integers and floting point number

let age2: number = 25;
let price:number = 245.79;
let big:number = 76858458550;

console.log("Age: ", age2);
console.log("Price: " , price);
console.log("Big: ", big);

console.log(typeof(age2));
console.log(typeof(price));

// 2) STRING DATA TYPE - Representing textual data

/*
1. Single quote ('')
2. Double quote ("")
3. Backtick (``)
*/

let firstName:string = "Mohanraj";
let lastName:string = "Kumar"
console.log("Hello", firstName, lastName) // simply printing by referring the variable name

let greeting:string = `Hello ${firstName} ${lastName}`; //accessing the value using backtick symbol reference method
console.log(greeting);
console.log(typeof(greeting));

// 3) BOOLEAN TYPE - Representing either True or False

let isStudent:boolean=true;
let hasJob:boolean=false;

console.log("Is Student? ", isStudent);
console.log("Has Job? ", hasJob);
console.log(typeof(isStudent));

// 4) NULL or Undefined - Special type for absence of value, We are not using mostly.

let emptyValue:null=null;
let notAssigned:undefined=undefined;

console.log("Null: ", emptyValue);
console.log("Undefined: ", notAssigned);
console.log(typeof(emptyValue));
console.log(typeof(notAssigned));

// 5) ANY - Loses of Typescript benefits

let value:any="Welcome!";
console.log(typeof(value));

value=100;
console.log(typeof(value));

value=true;
console.log(typeof(value));

console.log(value);

// 6) UNION TYPE - Combine multiple data types for a single variable with Type safty feature

let id:number | string | boolean;
id = "Mohan";
console.log(id);
console.log(typeof(id)); // string

id = 456;
console.log(id);
console.log(typeof(id)); // number

id = false;
console.log(id);
console.log(typeof(id)); // boolean

console.log("Final Id: ", id);

// 7) VOID - Used for function, that don't rerurn anything.

function show(): void{
    console.log("Welcome!")
}

show();

function sum(x:number, y:number):number{
    let result:number = x+y;
    console.log("Result inside function: ", result);
    return result;
}

let finalResult = sum(10,20);
console.log("Final Result: "+finalResult);