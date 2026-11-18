class BOA {
    #balance

    constructor(name, balance){
        this.name = name;
        this.#balance = balance
    }

    getBalance(){
        return this.#balance
    }

    setBalance(balance, isCashier){
        if (isCashier === true){
            this.#balance += balance;
        }else{
            console.log("Not Allowed")
        }

    }
}

let rajesAccount = new BOA("Rajesh",1000)

rajesAccount.getBalance();

rajesAccount.setBalance(2000, false);
console.log(rajesAccount.getBalance());
rajesAccount.setBalance(2000,true);
console.log(rajesAccount.getBalance());