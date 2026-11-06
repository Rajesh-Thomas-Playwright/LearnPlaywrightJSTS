function openBrowser(callback){
    console.log("Opening the Browser");
    setTimeout(function(){
        console.log("Step1 - browser starting....");
        callback();
    }, 5000)
}

function goToLoginPage(callback){
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 500);
}

function enterCredentials(callback) {
    setTimeout(function(){
        console.log("Step 3: Credentials entered");
        callback();
    }, 500);
}

function clickLogin(callback) {
    setTimeout(function() {
        console.log("Step 4: Login button clicked");
        callback();
    }, 500);
}

// Callback hell

openBrowser(function() {
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is completed");
            })
        })
    })
})