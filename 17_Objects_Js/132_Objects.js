let a1 = {
    name: "Rajesh"
}

console.log(a1);
console.log(a1.name);

let a = {status: "pass"};
console.log(a.status);

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);
console.log(a22["Stat"]);
console.log(a22);