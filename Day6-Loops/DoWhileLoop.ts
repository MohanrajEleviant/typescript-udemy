// do-while loop: A do-while loop always executes at least oncce before checking the condition.

/* 
Syntax:
-------
do 
{
    statements;
} while (condition);
*/

// Example-1: Print the number from 1 to 5
let u:number=1;
console.log("#### Print numbers from 1 to 10 ####")

do{
    console.log(u);
    u++;
} while(u<=5)

// Example-2: Print the numbers from 10 to 1 in decending order
let w:number=10;
console.log("#### Print numbers from 10 to 1 in decending order ####")

do {
    console.log(w);
    w--;
}while(w>=1)