class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' ja ligado');
            return;
        }
        this.ligado = true
    }

    desligar() {
        if(this.ligado) {
            console.log(this.nome + ' ja desligado');
            return;
        }
        this.ligado = false
    }
}

class Smartphone extends DispositoEletronico {
    constructor (nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const s1 = new Smartphone('iphone');
console.log(s1);