class BasePage{
    constructor(name){
        this.name = name;
    }

    open() {
        console.log(" [OPEN] " + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log(" [Login] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor(){
        super ("Admin Panel")        
    }

    manageUsers() {
        console.log("Admin Managing Users");
    }

}

let admin = new AdminPage()
admin.open();
admin.login("Super Admin");
admin.manageUsers();
