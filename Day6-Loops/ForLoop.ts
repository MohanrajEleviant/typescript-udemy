// For Loop: A for loop is used, when the number of iterations is know beforehand.

/* 
Syntax:
-------
for (initialization; condition; increment/decrement)
{
    statements;
}
*/

// Example-1: Print numbers from 1 to 10
console.log("#### Print numbers from 1 to 10");
for (let i=0; i<=10; i++){
    console.log(i);
}

// Example-2: Print even numbers between 1 to 10 (with % operartor)
console.log("Print even numbers between 1 to 10 (with % operartor)");
for (let j=1; j<=10; j++){
    if (j%2==0){
        console.log(j);
    }
}

// Exanple-3: Print even numbers between 1 to 10 (without % operartor)
console.log("Print even numbers between 1 to 10 (without % operartor)");
for (let k=2;k<=10;k+=2){
    console.log(k);
}

// Example-4: Print the numbers in reverse order from 10 to 1
console.log("#### Print the numbers in reverse order ####");
for (let l=10;l>=1;l--){
    console.log(l);
}

// Example-5: Global and Local variable
console.log("#### Global anb Local variable understanding ####");
let p1:number; // Here p is the global variable
for (let p1=0;p1<=5;p1++){ // However, here p is the local variable. Since, the scope is inside the for loop only. Since, its redeclared again.
    console.log(p);
}
// console.log(p);

// Example-6: Semi-colon after for loop
console.log("#### Semi-colon after for loop ####");
let q1:number;
for (q1=0;q1<=5;q1++);
console.log(q); // The result should be 6. Since, the final value of for loop will be stored in q and printed as well. Because, the semi-colon is present in the for loop.