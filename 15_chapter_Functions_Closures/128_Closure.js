function startBrowser() {
    
    let name = "Edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();
runTc();
