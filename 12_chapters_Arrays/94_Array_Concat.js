let a = [1,2];
let b = [3,4];

let c = a.concat(b);
console.log(c);

let d = [...a, ...b]
console.log(d);


const data = "5 1 2 1 3 2"

const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
console.log(tokens)
const n = tokens[0];
console.log(n)
const arr = [...tokens];
console.log(arr)

let frequency = {};

for(let item of arr){
    frequency[item] = (frequency[item] ?? 0) + 1;
}

const output = Object.entries(frequency)
    .map(([key, value]) => `${key} appears ${value} times`)
    .join(' ');
console.log(output);

