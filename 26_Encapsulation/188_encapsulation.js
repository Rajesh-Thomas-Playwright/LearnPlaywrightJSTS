class person{
    #c1;
    #c2;
    
    constructor(name, c1, c2) {
        this.name = name;
        this.#c1 = c1;
        this.#c2 = c2;
    }

    getChild (){
        return this.#c1;
    }

    setChild(changed_name){
        this.#c1 = changed_name;
    }
}

let p1 = new person ("Rajesh", "Ron", "Bem");

console.log(p1.name);
//console.log(p1.#c1); //not allowed

console.log(p1.getChild());

p1.setChild("Ben");
console.log(p1.setChild);
console.log(p1.getChild());