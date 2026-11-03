// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
console.log(url.includes("staging"));  
console.log(url.includes("production"));

// startsWith / endsWith
console.log(url.startsWith("https"));
console.log(url.startsWith("http://")); 
console.log(url.endsWith("true")); 

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

// ASCII -> A -> 65


console.log("playwright".length)
console.log("playwright"[2]);
console.log("playwright".at(2));
console.log("playwright".charAt(2));
console.log("abc".charAt(99));

console.log("Login Successful".indexOf("Success"))
console.log("a-b-a".lastIndexOf("a"));
console.log("Login Successful".includes("Log"));
console.log("https://qa.com".startsWith("http://")) 
console.log("report.pdf".endsWith(".pdf"));
console.log("Order #10245".search(/\d+/)); 



