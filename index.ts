// 5.Exploring Arrays with Loops(Using loop )
// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// to iterate through array elements.
// Instructions:
// 1. Create an empty array:
// o Define an empty array called myArray.
// 2. Run a loop 10 times, adding a new incrementing value to the array:
// o Use a for loop to iterate 10 times.
let myArray: number[] = [] ; 

for (let i = 1 ; i <= 10; i++){
    myArray.push(i);
}

console.log("Array"  , myArray );

for (let i = 0 ; i < myArray.length ; i ++ ){
    console.log(`Index: ${i}  , Value: ${myArray[i]}`);

}

for (let value of myArray){
    console.log(`value :${value}`);
}