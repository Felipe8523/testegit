function Acount(agency, acount, balance) {
    this.agency = agency; //agencia
    this.acount = acount; //conta
    this.balance = balance; //saldo
}

Acount.prototype.towithdraw = function(value) {
    if(this.balance < value) {
        console.log(`insufficient funds: ${this.balance} ` )
        return;
    } //towithdraw significa sacar

    this.balance -= value;
    this.SeeBalance();
};// usado para ver e sacar

Acount.prototype.Deposit = function(value) {
    this.balance += value;
    this.SeeBalance();
};
Acount.prototype.SeeBalance = function() {
    console.log(`Ag.: ${this.agency}/${this.acount}` + 
    `Saldo R$ ${this.balance.toFixed(2)}`
    );
};

function CC(agency, acount, balance, limit){
    Acount.call(this, agency, acount, balance);
    this.limit = limit;
};

CC.prototype = Object.create(Acount.prototype);
CC.prototype.constructor = CC;

CC.prototype.towithdraw = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log(`insufficient funds: ${this.balance} ` )
        return;
    };
    this.balance -= value;
    this.SeeBalance();
};

const user2 = new CC(11, 22, 0, 100);
CC.Deposit(10);