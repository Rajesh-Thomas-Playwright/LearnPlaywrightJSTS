let a = 10;
class Car{
    b;
    constructor(){
        console.log(a);
        this.b = 20;
    }
}
let obj= new Car();
let obj2= new Car();

console.log(obj2.b)