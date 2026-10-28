// Function as Expression

let funcAsExpression = function (name){
    return `Hello, ${name}`;
}

// Anonymous Fn - Fn without name.
const greet1 = function (name){
    return `Hello, ${name}`;
}

console.log(greet1("Amit"));
console.log(funcAsExpression("Amit"));