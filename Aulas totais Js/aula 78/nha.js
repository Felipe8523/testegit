function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo +=valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag.:${this.agencia}/${this.conta} ` + 
    `saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, saldo, conta, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();

};

const cc = new ContaCorrente(11, 22 , 0, 100);
cc.depositar(10);
cc.sacar(40);
