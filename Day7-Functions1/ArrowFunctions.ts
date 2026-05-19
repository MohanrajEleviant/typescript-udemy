// Arrow Function / Lambda functions

/* 
Array function is also called lambda function. This helps to reduce the code

There are 3 parts in Arrow/Lambda functions
1. Parameters - A function may having optionally parameters
2. The fat arrow function (=>) 
3. Statements - represent the functions instruction set

Syntax:
let variable=(parameter)=>
{
    block of codes
}
    variable()

*/

// Ex-1: Arrow function without parameter and no return type
let msg = ():void =>{
    console.log("Hello Mohan!!");
}
msg();

/* ######################################## */

// Ex-2: Arrow function with parameter and return type
let addNos=(xa:number, ya:number):number => {
    return xa + ya;
}
console.log(addNos(6,7));

/* ######################################## */

// Example-3: Named functions with Rest parameters
// Rest parameters dont restrict the number of values that we can pass to a function. n number values, we can pass.
let addNumbersWithRestParameter=(...nums:number[])=>{
    let xc:number;
    let sum:number=0;

    for (xc=0; xc<nums.length; xc++){
        sum = sum + nums[xc];
    }
    console.log("Sum of numbers: ",sum);
}

addNumbersWithRestParameter(5,5);
addNumbersWithRestParameter(10,20,30,40);
addNumbersWithRestParameter(25,8,9,4,2,22,45,38);

/* ######################################## */

// Example-4: Named function with Rest parameters - Multiple types
let findLengthValue=(...elements:(number | string)[]):number =>{
    return elements.length;
}
console.log(findLengthValue(6,2,"Mohan",4,"Raj"));
console.log(findLengthValue(25,8,9,4,2,22,45,38));
console.log(findLengthValue("xyz","abc"));

/* ######################################## */

// Example-5: Named function with optional parameters
let displayDetailsArrow=(id:number, name:string, mail?:string)=>{
    console.log("ID: ", id);
    console.log("Name: ", name);
    if(mail !== undefined){
        console.log("Email: ", mail);
    }
}
displayDetailsArrow(75,"Mohan","mohan@gmail.com");
displayDetailsArrow(67,"Kavya");

/* ######################################## */

// 6. Named function with default parameters
let defaultParamsArrow = (price:number,rate:number=5):void=>{
    let discount = price * rate;
    console.log("Discounted amount: ", discount);
}
defaultParamsArrow(1000,10);
defaultParamsArrow(500);