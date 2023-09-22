function produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, //valor
        writable: true, // pode alterar ou não
        configurable: true //configuravel a propriedade
    });
    Object.defineProperties(this, {
        nome:
        {enumerable: true, 
        value: nome, 
        writable: true, 
        configurable: true },
        
        
        preco:
        {enumerable: true, 
        value: preco, 
        writable: true, 
        configurable: true },
    });
}

const p1 = new produto('camiseta', 20, 3);
p1.estoque = 500;
console.log(Object.keys(p1));
for(let chave in p1) {
    console.log(chave);
}