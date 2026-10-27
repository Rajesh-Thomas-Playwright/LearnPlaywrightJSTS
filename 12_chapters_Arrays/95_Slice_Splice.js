//The core difference is that slice returns a piece of the array without changing it, 
//while splice permanently changes (mutates) the original array.

const items = ['A', 'B', 'C', 'D'];
const extracted = items.slice(1, 3);

console.log(extracted); // ['B', 'C'] -> The extracted piece
console.log(items);     // ['A', 'B', 'C', 'D'] -> Original is unchanged


const items1 = ['A', 'B', 'C', 'D'];
const removed = items1.splice(1, 2, 'X', 'Y');

console.log(removed);   // ['B', 'C'] -> The items that were cut out
console.log(items1);     // ['A', 'X', 'Y', 'D'] -> Original array is permanently modified


let arr = [1, 2, 3, 4, 5, 6];
let rmv = arr.splice(2, 1);   
console.log(arr);
console.log(rmv);

arr.splice(2, 0, 99); 
console.log(arr);