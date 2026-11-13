class APIClient {
    constructor (baseURL){
        this.baseURL = baseURL;
    }

    getPath(path){
        return this.baseURL + path;
    }
}

let staging = new APIClient("https://staging.api.com");
let prod =  new APIClient("https://prod.api.com");

console.log(staging.getPath("/users"));
console.log(prod.getPath("/users"));