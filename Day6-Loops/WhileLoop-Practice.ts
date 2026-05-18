//  ------ 1.  Write a program to calculate the sum of the first 10 natural numbers using a while loop.  
// Logic: 1+2+3+4+5+6+7+8+9+10 = 55

/* let ab:number=1;
let sum:number=0;

while(ab<=10){
    sum = sum+ab;
    console.log('ab: ',ab, "Sum: ", sum);
    ab++;
} */

// ######################################################################################

// ------ 2.  Write a program to calculate the factorial of a given number using a while loop.
// Logic: 1*2*3*4*5 = 

/* let ab:number=1;
let fact:number=1;

while(ab<=5){
    fact = fact * ab;
    console.log("ab", ab, "Fact: ", fact);
    ab++;
} */

// ######################################################################################

// ------ 3.  Write a program to reverse a given number using a while loop. 
// Step-1: Declare and Initialize the variable (numberToReverse=12345, reversedNumber=0)
// Step-2: Need to mod the number by 10 - We will get the last digit of the number (digit= numberToReverse % 10)
// Step-3: Make it whole number and keep them in separate variable (reversedNumber = reversedNumber * 10 + digit)
// Step-4: Update the numberToReverse by removing last digit (Math.floor(numberToRevers/10)) - To iterate the loop

/* let numberToReverse:number=12345;
let reversedNumber:number = 0;

// while loope to reverse the numbers
while(numberToReverse !=0){
    let digit:number = numberToReverse % 10; // 5 4 3 2 1
    reversedNumber = reversedNumber * 10 + digit; // 5 54 543 5432
    numberToReverse = Math.floor(numberToReverse/10); //1234.5 123.4 12.3 1.2
}
console.log(reversedNumber);

// For loope to reverse the numbers
for (let numberToReverse:number = 12345;numberToReverse!=0;numberToReverse=Math.floor(numberToReverse/10)){
    let digit:number = numberToReverse % 10; // 5 4 3 2 1
    reversedNumber = reversedNumber * 10 + digit; // 5 54 543 5432
    console.log(reversedNumber)
}
console.log(reversedNumber); */

// ######################################################################################

// 5.  Write a program to find the largest digit in a given number using a while loop. 
// Step-1: Need to declare the two variables. numberToCheck & largestDigit.
// Step-2: Then, create a while look until the numberToCheck !=0
// Step-3: Need to mod the number by 10 - We will get the last digit of the number (digit= numberToCheck % 10)
// Step-4: Then, check whether the 'digit>largestDigit'. If yes, then assign the digit value to largestDigit variable.
// Step-5: Update the numberToCheck by removing last digit (Math.floor(numberToCheck/10)) - To iterate the loop

/* let numberToCheck: number = 68414;
let largestDigit: number = 0;

while(numberToCheck !=0){
    let digit:number = numberToCheck % 10;
    if (digit>largestDigit){
        largestDigit = digit;
    }
    numberToCheck = Math.floor(numberToCheck/10);
}
console.log("Largest Digit is: ", largestDigit); */

// ######################################################################################

// 6.  Write a program to check if a given number is a palindrome using a while loop. 
// Login: Check the number should be same, when we write them in reverse order.

/* let numberToCheckPalindrom:number = 12321;
let originalNumber:number = numberToCheckPalindrom;
let numberReverseCheck:number = 0;

while (numberToCheckPalindrom !=0){
    let digit:number = numberToCheckPalindrom % 10;
    numberReverseCheck = numberReverseCheck * 10 + digit;
    numberToCheckPalindrom = Math.floor(numberToCheckPalindrom/10);
}
console.log("Reversed number: ", numberReverseCheck);

if (originalNumber == numberReverseCheck){
    console.log("This is Palindrom");
}else{
    console.log("This is not a Palindrom");
} */

// ######################################################################################

//  ------ 4.  Write a program to check if a given number is a prime number using a while loop. 
// Logic - A prime number is a number that can be divided exactly by only:
// - 1
// - the number itself
// Example Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19...

// Step-1: Declare and initialize the input variable, minNumber & set isPrime=true.
// Step-2: Check whether the inputNumber > minNumber - Need to iterate until the minNumber = inputNumber
// Step-3: Mod the inputNumber by minNumber and result should be 0

/* let inputNo:number = 20;
let minNumber:number =2;
let isPrime:boolean=true;

while(inputNo>minNumber){
    if (inputNo % minNumber == 0){
        isPrime = false;
        break;
    }
    minNumber++;
}

if (isPrime){
    console.log("This is Prime number");
}else{
    console.log("Not a Prime number");
} */
