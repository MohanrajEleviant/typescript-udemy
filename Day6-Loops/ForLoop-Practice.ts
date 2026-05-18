// 9. Print Multiples of 5 from 5 to 50

/* for (let printMultipleOf5 = 5; printMultipleOf5 <= 50; printMultipleOf5++) {
  if (printMultipleOf5 % 5 == 0) {
    console.log(printMultipleOf5);
  }
}

for (let pm = 5; pm <= 50; pm += 5) {
  console.log(pm);
} */

// ######################################################################################

// 10. Print Prime Numbers between 1 and 50

/* for (let currentNumber: number = 2; currentNumber <= 50; currentNumber++) {
  let isCurrentNumberPrime: boolean = true;

  for (let divisor: number = 2; divisor < currentNumber; divisor++) {
    if (currentNumber % divisor === 0) {
      isCurrentNumberPrime = false;
      break;
    }
  }

  if (isCurrentNumberPrime) {
    console.log(currentNumber);
  }
} */

// ######################################################################################

// 11. Print Sum of Even Numbers between 1 and 20  

for (let currentNo:number=1; currentNo<=20; currentNo++){
    if (currentNo % 2 == 0){
        console.log(currentNo);
    }
}

// ######################################################################################

// 12. Print Sum of Odd Numbers between 1 and 20  

for (let currNo:number=1; currNo<=20; currNo++){
    if (currNo % 2 != 0){
        console.log(currNo);
    }
}

// ######################################################################################

// 13. Print Table of 7  

for (let currTableNo:number=1 ; currTableNo <= 10 ; currTableNo++){
    console.log(`7 x ${currTableNo} = ${currTableNo * 7}`);
}

// ######################################################################################

// 14. Print Numbers Divisible by 3 and 5 from 1 to 100  

for (let divisibleByNo:number=1; divisibleByNo<=100; divisibleByNo++){
    if (divisibleByNo % 3 == 0 && divisibleByNo % 5 == 0){
        console.log(divisibleByNo);
    }
}

// ######################################################################################

// 15. Count Number of Digits in a Number  

let sourceNo:number = 374893;
let count:number=0;

for (let countNo:number=sourceNo; countNo > 0; countNo = Math.floor(countNo/10)){
    count ++;
}
console.log(count);
