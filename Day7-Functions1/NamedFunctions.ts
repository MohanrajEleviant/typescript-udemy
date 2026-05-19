/* 
1. Named function with no parameter and no return type
2. Named function with parameter and return type
3. Named function with Rest parameters
4. Named function with Rest parameters - multiple types
5. Named function with optional parameters
6. Named function with default parameters
*/


// Example-1: Named functions with no parameters and no return type
function display():void{
    console.log("NAMED FUNCTIONS");
}
display();

/* ######################################## */

// Example-2: Named functions with parameters and return type
function addNumbers(an1:number, an2:number):number{
    return an1+an2;
}
console.log(addNumbers(4,6));

/* ######################################## */

// Example-3: Named functions with Rest parameters
// Rest parameters dont restrict the number of values that we can pass to a function. n number values, we can pass.
function addNumbersWithRestParams(...nums:number[]){
    let xc:number;
    let sum:number=0;

    for (xc=0; xc<nums.length; xc++){
        sum = sum + nums[xc];
    }
    console.log("Sum of numbers: ",sum);
}

addNumbersWithRestParams(5,5);
addNumbersWithRestParams(10,20,30,40);
addNumbersWithRestParams(25,8,9,4,2,22,45,38);

/* ######################################## */

// Example-4: Named function with Rest parameters - Multiple types
function findLength(...elements:(number | string)[]):number{
    return elements.length;
}
console.log(findLength(6,2,"Mohan",4,"Raj"));
console.log(findLength(25,8,9,4,2,22,45,38));
console.log(findLength("xyz","abc"));

/* ######################################## */

// Example-5: Named function with optional parameters
function displayDetails(id:number, name:string, mail?:string){
    console.log("ID: ", id);
    console.log("Name: ", name);
    if(mail !== undefined){
        console.log("Email: ", mail);
    }
}
displayDetails(75,"Mohan","mohan@gmail.com");
displayDetails(67,"Kavya");

/* ######################################## */

// 6. Named function with default parameters
function defaultParams(price:number,rate:number=5):void{
    let discount = price * rate;
    console.log("Discounted amount: ", discount);
}
defaultParams(1000,10);
defaultParams(500);