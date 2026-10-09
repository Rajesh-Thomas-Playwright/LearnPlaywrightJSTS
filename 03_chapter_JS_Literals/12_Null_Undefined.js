var x;
console.log(x);  //undefined

var nullValue = null;
console.log(`"nullValue:" ${nullValue}`);

let userName;
console.log(userName);

console.log(typeof userName);


let y;
y = 10;
console.log(y);

let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture); 


/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/