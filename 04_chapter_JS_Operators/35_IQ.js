let statusCode = 501;

let statusCodeCategory = (statusCode < 300) ? "Success"
    : statusCode < 400 ? "Redirect"
    : statusCode < 500 ? "Client Error" : "Server Error" 

    console.log(`${statusCode}: ${statusCodeCategory}`);