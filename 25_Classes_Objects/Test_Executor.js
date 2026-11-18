class TestExecutor {
    static totalDuration = 0;
    static testDetails = {};
    constructor(name, duration) {
        this.name = name;
        this.duration = duration

        TestExecutor.totalDuration += this.duration;

        TestExecutor.testDetails[name] = duration

    }

    static getShortestTest() {
        const entries = Object.entries(TestExecutor.testDetails);

        let shortest = entries[0];
        for (const entry of entries) {
            if (entry[1] < shortest[1]) {
                shortest = entry;
            }
        }

        const [name, duration] = shortest;
        return name

    }


}

let loginTest = new TestExecutor("login test", 200);
let dashBoard = new TestExecutor("Dasbboard test", 400);
let loginAPITest = new TestExecutor("Login API", 100);


console.log(loginTest.name);
console.log(TestExecutor.testDetails)
console.log(TestExecutor.totalDuration);
console.log(TestExecutor.getShortestTest());