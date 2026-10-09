// Compasion Operator (will always result in the boolean, true or false)

// = - Assignment Operator


//  ==, ===

// == -> losse comparsion ( sikh vs hindu )
// === -> strict comparsion ( sikh vs hindu , languge, living)

// pizza == pizza // ( type)
// domin === pizzahut // (type and content)

// > , < , >= , <= 


// console.log(3 > 4);
// console.log(3 < 4);
// console.log(4 >= 4); // (4 > 4 or 4 == 4, or gate)

console.log(5 == "5"); // lose couple comparsion , value
console.log(5 === "5"); // stict not allowed - valeu + datatype both

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.

// ! -> not char
console.log(5 != "5"); // value
console.log(5 !== "5"); // (with !, == actuall ===) !===


console.log(5 === 5);


let num = 5;
let str = "5";

//Additional examples

console.log(num == str);  // true  -> JavaScript converts the string "5" into the number 5
console.log(num === str); // false -> The types are different (number vs. string)


console.log(1 == true);   // true  -> Number 1 is coerced into the boolean true
console.log(1 === true);  // false -> The types are different (number vs. boolean)

console.log(0 == false);  // true  -> Number 0 is coerced into the boolean false
console.log(0 === false); // false -> The types are different (number vs. boolean)


console.log("" == 0);     // true  -> Both are coerced to falsy equivalents
console.log("" === 0);    // false -> The types are different (string vs. number)


console.log(null == undefined);  // true  -> A special rule in JavaScript
console.log(null === undefined); // false -> Different data types
