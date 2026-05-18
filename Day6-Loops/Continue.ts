// Continue - It skips the current iteration and remaining will be executed.

// Example-1: Continue by one condition
console.log("### Continue by one condition ###");
for (let t=1;t<=10;t++){

    if(t==5){
        continue;
    }

    console.log(t);
}

// Example-2: Continue by multiple conditions
console.log("### Continue by multiple conditions ###");
for (let u=1;u<=10;u++){
    if (u==3 || u==5 || u==7){
        continue;       // The u value is 3 or 5 or 7, then those iteration alone will be skipped.
    }
    console.log(u);
}