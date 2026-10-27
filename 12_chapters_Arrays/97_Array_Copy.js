let original = [1,2,3];

console.log(original);

let copy1 = [...original]

console.log(copy1);

let copy2 = original.slice();

console.log(copy2);


let deep_copy_array = original;

deep_copy_array.push(91)

console.log(deep_copy_array);
console.log(original);

