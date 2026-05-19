/* Anonymous function is the special function. We can delcare the function to the variable and call the function
using the variable name
 */

// Example-1 Anonymous function without parameter.
let message = function():string{
    return "Hello Typescript";
}
console.log(message()); 

// Example-2 Anonymous function with parameter.
let multiple = function(am:number, bm:number):number{
    return am*bm;
}
console.log("Multiplicaton Value: ", multiple(5,5));