class car {
    #engine

    constructor(name, engineName){
        this.name = name;
        this.#engine = engineName
    }

    getEngineName(){
        return this.#engine;
    }

    setEngine(nameEngine){
        this.#engine = nameEngine;
    }

}

let newCar = new car("Testla", "Dual Motor")
console.log(newCar.name);
console.log(newCar.getEngineName());