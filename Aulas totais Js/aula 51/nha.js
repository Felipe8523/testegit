//return
//retorna um valor
//termina a função
function retornafuncao() {
    const nome = 'luiz';
    return function () {
        return nome;
    }
}
const funcao = retornafuncao();
console.log(funcao);