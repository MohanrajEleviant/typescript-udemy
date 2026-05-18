// While loop : A while loop executes as long as the condition is true

/* 
Syntax:
-------
while (condition)
{
    statement;
}
*/

// Example-1: Print 1....5
let i:number=1;
console.log("#### Print Numbers between 1 to 5 ####");
while(i<=5){
    console.log(i);
    i++;
}

// Example-2: Print only even number (1....10) using % operartor
let j:number=1;
console.log("#### Print Even Numbers between 1 to 10 using % operartor ####");
while(j<=10){
    if (j%2==0){
        console.log(j);
    }
    j++;
}

// Example-3: Print only odd number (1....10) using % operartor
let m:number=1;
console.log("#### Print Odd Numbers between 1 to 10 using % operartor ####");
while(m<=10){
    if (m%2==1){
        console.log(m);
    }
    m++;
}

// Example-4: Print only even number (1....10) without using % operartor
let k:number=2;
console.log("#### Print Even Numbers between 1 to 10 without using % operartor ####");
while(k<=10){
    console.log(k);
    k+=2; // k=k+2
}

// Example-5: Print only odd number (1....10) without using % operartor
let n:number=1;
console.log("#### Print Odd Numbers between 1 to 10 without using % operartor ####");
while(n<=10){
    console.log(n);
    n+=2; // n=n+2
}

// Example-6: Print the number (1....10) in descending order
let v:number=10;
while(v>=1){
    console.log(v);
    v--;
}

