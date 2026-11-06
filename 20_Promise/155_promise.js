let apiCall = new Promise(function(resolve, reject){
    resolve({status : 200, body : "User Data"});
})

apiCall.then(function(response){
    console.log(response);
})

let testRun = new Promise(function(resolve, reject){
    reject("Assertion Failed");
});

testRun.then(function(data) {
    console.log(data);
}).catch(function (error){
    console.log(error);

});