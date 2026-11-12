Promise.allSettled([

    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function (results){
    results.forEach( function (r, i) {
        console.log("Test " + (i+1) + ":", r.status, "-", r.value || r.reason)

    });
})
