const user = { name1: "John", age: 30, city: "NYC" };

let {name1,age,city} = user;
console.log(user.name1);
console.log(user.age);
console.log(user.city);

let ages =  [20,30,40]

let [firstAge, secondAge, thirdAge] = ages;

console.log(firstAge);
console.log(secondAge);
console.log(thirdAge);

//Rename while destructuring

const user1 = { name1: "John", age: 30, city: "NYC", country: "Netherlands" };
let {name1: username, age: userage, city: usercity, country:usercountry ="USA"} = user1;


console.log(username);
console.log(userage);
console.log(usercity);

// Default value if the key is missing
console.log(usercountry)