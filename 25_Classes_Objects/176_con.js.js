class Credentials {
    #apiKey;

    constructor (user, key){
        this.user = user;
        this.#apiKey = key
    }

    getAuthHeader () {
        return "Bearer " + this.#apiKey
    }
}

let cred = new Credentials("Alice", "12345");
console.log(typeof(cred));
console.log(cred);
console.log(cred.getAuthHeader());

console.log(cred.user);
//console.log(cred.#apikey); --not allowed