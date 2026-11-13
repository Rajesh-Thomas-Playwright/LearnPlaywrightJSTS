class Browser {
    constructor (name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " Launched")
    }

    startBrowser(){
        console.log("Starting the Browser");
    }

    closeBrowser(){
        console.log("Closing the Browser");
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

chrome.startBrowser();
console.log("Chrome is Open ", chrome.isOpen);
chrome.closeBrowser();
firefox.startBrowser();

