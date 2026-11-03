let a = { status: "pass" };
let b = a;  //Copy the reference
console.log("b:", b)
b.status = "fail";
console.log(a.status);
console.log(a);