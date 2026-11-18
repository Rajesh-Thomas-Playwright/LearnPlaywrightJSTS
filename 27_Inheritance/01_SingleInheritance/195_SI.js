class Father{
    eat(){
        console.log("Eating");
    }
}

class Son extends Father {

    walk(){
        console.log("Walking")
    }
}

const s = new Son ();
const f =  new Father();

s.walk();
s.eat();

f.eat();


