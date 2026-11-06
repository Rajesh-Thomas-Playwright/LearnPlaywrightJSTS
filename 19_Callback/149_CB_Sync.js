let testResults = ["Pass", "Fail", "Pass", "Skip"];

let results = testResults.entries()
console.log(typeof results);
    
for (let [index, value] of results){

    console.log(`Index:${index} Value: ${value}`);
}


testResults.forEach((item, index, array) =>{
    console.log("Test", item, index);
    console.log(array);
})
