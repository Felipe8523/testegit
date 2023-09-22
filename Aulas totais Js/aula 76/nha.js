// produto 
// CASA A, CASA B, CASA C
function produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
function CasaA(nome, preco, cor) {
    produto.call(this, nome, preco);
}
const casaa = new CasaA('alojamento', 1.2, 'azul');
console.log(casaa);