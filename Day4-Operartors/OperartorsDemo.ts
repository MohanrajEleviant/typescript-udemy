let a:number=20,b:number=10;

// Arithmetic Operartor

console.log("******** Arithmetic Operartors ***********")
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(10**2);

// Assignment Operartor
a=10;
b=5;

console.log("******** Assignment Operartors ***********")
console.log(a+=b); //a=a+b --> 15
console.log(a-=b); //a=a-b --> 10
console.log(a*=b); //a=a*b --> 50
console.log(a/=b); //a=a/b --> 10
console.log(a%=b); //a=a%b --> 0

// Relational/Comparison Operartor

a=10;
b=20;

console.log("******** Relational Operartors ***********")
console.log(a<b);   // true
console.log(a>b);   // false
console.log(a<=b);  // true
console.log(a>=b);  // false
console.log(a==b);  // false
console.log(a!=b);  // true

// Difference between == (equality) and === (Strict equality)

let num1:any=10;    //number type
let num2:any="10";  //string type

console.log("******** Difference between == (equality) and === (Strict equality) ***********")
console.log(num1==num2);    //true (only compare values)
console.log(num1===num2);   //false (compare both values and type)

// Logical Operartors && || !
// always returns boolean values (true/false)

let b1:boolean=true;
let b2:boolean=false;

console.log("******** Logical Operartors ***********")
console.log(b1 && b2);  //false
console.log(b1 || b2);  //true
console.log(!b1);   //false
console.log(!b2);   //true

// Mixing of Relational and Logical operartors

console.log("******** Mixing of Relational and Logical Operartors ***********")
console.log (20>10 && 15<45);
console.log(25>10 || 10>35)
