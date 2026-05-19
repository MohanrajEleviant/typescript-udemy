/* 
Arrays in Typescript
--------------------
1. An array is the special type of variable that stores multiple values.
2. The values can be either 'Same data type' or 'Multiple data type'
3. Arrays are declaring using '[]' or the generic 'Array<T>' type
4. Indexing starts from 0
5. Arrays are in ordered collection of elements.
*/

// Approach-1: Using leteral
// -------------------------
let names:string[]=["John","Peter","Scott","Lema"]; // Declaration and assigning values
console.log(names);

/* ##################################### */

// Approach-2: Using generic 'Array<T>' type
// -----------------------------------------
let empNames:Array<string>=["John","Peter","Scott","Lema"]; // String array
let empIds:Array<number>=[34,5,22,63,13]; // Number array
let empAdd:Array<string | number>=["Jonn",48,"Peter","Scott",22,72];
let mixedData:Array<any> = ["Jack",84,true,null];

// Ex-1: Iterating over the traditional for loop
console.log("Traditional for loop");
for(let i=0;i<empNames.length;i++){
    console.log(empNames[i]);
}

// Ex-2: Iterating using the 'for...in' loop (indexs)
console.log("for....in loop");
for(let i in empNames){
    console.log(empNames[i]); // Here i is acting like a inxed. Value will be extracted and printed using index
}

// Ex-3: Iterating using 'for...of' loop (values)
console.log("for....of loop");
for(let i of empNames){
    console.log(i); // Here i is acting like a value. Extracted values are directly stored in the i variable.
}
