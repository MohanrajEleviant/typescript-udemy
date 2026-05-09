// Example-1: If condition

let age:number=30;

if (age>18){
    console.log("You are eligible for vote!!");
}

// Example-2: If else condition

let no:number=20;

if(no%2==0){
    console.log(`${no} is a EVEN number`);
}else {
    console.log(`${no} a ODD number`);
}

// Example-3: Nested If else condition

let mark:number=82;

if (mark>=90){
    console.log("Grade A");
} 
else if (mark<90 && mark>= 75){
    console.log ("Grade B");
}
else if (mark<75 && mark>=60) {
    console.log ("Grade C");
}
else if (mark <60 && mark >= 40){
    console.log ("Grade D");
}
else {
    console.log ("Fail");
}

// Example-4: Browser selection

let browser:string="mohan";

if (browser === "chrome"){
    console.log("Its a CHROME");
}else if (browser === "firefox"){
    console.log ("Its a FIREFOX");
}else if (browser === "edge"){
    console.log("Its a EDGE");
}else{
    console.log("Its a SAFARI");
}

// Example-5: Switch condition

let day:number=5;

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day");
}