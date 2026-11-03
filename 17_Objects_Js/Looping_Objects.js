const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(Object.entries(obj));

for(key in obj){
    console.log(`${key}: Value is ${obj[key]}`);
}

const user = { name: "John", age: 30 };

Object.entries(user).forEach(([key,value])=>{
    console.log(`${key}: ${value}`);

});

const config = {

    baseUrl: 'http://localhost:3000',

    apiBaseUrl: 'http://localhost:3000/api',

    testUser: {

        username: 'testuser@example.com',

        password: 'SecurePass123',

    },

    logLevel: 'INFO',

    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),

};

let keys = Object.keys(config);
console.log(keys);

for(key in config)
    {
    console.log(`${key}:${config[key]}`);
}


Object.entries(config).forEach(([key,value])=>{
    console.log(`${key}: ${value}`);

})

console.log(config['baseUrl']);