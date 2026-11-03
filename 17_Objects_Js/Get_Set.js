const user = {

    firstName: "Pramod",

    lastName: "Dutta",

    get fullName() {

        return this.firstName +" "+ this.lastName;

    },

    set fullName(value) {

        [this.firstName, this.lastName] = value.split(" ");

    }

};

console.log(user.fullName);

user.fullName = "Rajesh Thomas"

console.log(user.fullName);
