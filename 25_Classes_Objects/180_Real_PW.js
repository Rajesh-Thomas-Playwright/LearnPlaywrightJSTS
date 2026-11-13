class TestCase{
    constructor(name_given, status_given, priority_given){
        this.name = name_given;
        this.status = status_given;
        this.priority = priority_given;
    }
        display() {
            console.log(this.name + " --> " + this.status + " --> " + this.priority);
        };
    
}

let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
let signup_ref = new TestCase("Signup Test ", "FAIL", "P0")

loginTest_ref.display();
signup_ref.display();