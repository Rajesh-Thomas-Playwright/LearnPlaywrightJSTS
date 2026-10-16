let amul = null;
let val = amul ?? "Nandani Milk"

console.log(val);

let api_response = null;
let responsedata = api_response ?? "{}";

console.log(responsedata)

let api_response1 = "Pramod";
let responseData1 =  api_response1 ?? "{}";

console.log(responseData1);

let mark = 90;

if(mark > 100 || mark < 0) {
    console.log("Invalid Grade")
}
else {
    if (mark >= 90 && mark <=100)
    {
        console.log("A")
    }
    else if (mark >= 80 && mark <90 ) {
        console.log("B")
    }
    else if (mark >= 70 && mark <80 ) {
        console.log("C")
    }
    else if (mark >= 60 && mark <70 ) {
        console.log("D")
    }
    else {
        console.log("F");
    }

}

