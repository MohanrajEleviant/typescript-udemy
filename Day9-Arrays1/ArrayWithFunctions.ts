/* 
Passing an array as parameter to the function

And search the value is exists in the array or not
 */

function arrayParams(searchValue:number,arr:Array<number>){
    for (let i=0;i<arr.length;i++){
        if(arr[i]===searchValue){
            return true;
        }
    }
    return false;
}

let arr:Array<number> = [23,44,10,50];

console.log(arrayParams(10,arr));
console.log(arrayParams(29,arr));