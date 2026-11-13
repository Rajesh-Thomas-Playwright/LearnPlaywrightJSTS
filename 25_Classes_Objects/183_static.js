class TestRunner {
    static totalTests = 0;
    static passCount = 0;

    constructor(name, passed){
        this.name = name;
        TestRunner.totalTests++;

        if(passed) {
            TestRunner.passCount++
        }
    }

    // static totalTests(){
    //     console.log("Total Tests: ", TestRunner.totalTests)
    // }
    // static passCount(){
    //     console.log("Total Tests: ", TestRunner.passCount)
    // }
}

let t1 = new TestRunner("Login Test", true);
let t2 = new TestRunner("Dashboard Test", false);

console.log(TestRunner.totalTests);
console.log(TestRunner.passCount);

console.log(t1.name);
console.log(t2.name);