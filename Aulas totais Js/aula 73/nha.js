const produto = {nome: 'produto', preco: 1.8};
Object.defineProperty(produto,'nome', {
    writable: false,
    configurable: false,
    value: '2.5'
});
console.log(Object.getOwnPropertyDescriptors(produto, 'nome'))
console.log(produto);
