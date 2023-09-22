/*
057.297.825-19
0x x5 x7 x2 x9 x7 x8 x2 x5
10 9  8  7  6  5  4  3  2
0  45 56 14 54 35 32 6  10 = 252
11 - (252 % 11) = 1
0x x5 x7 x2  x9 x7 x8 x2 x5 x1
11 10  9  8  7  6  5   4  3  2
0  50 63 16  63 42 40  8  15 2 = 11 - (299 % 11)


*/
function ValidaCPF(cpfenviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        Enumerable:true,
        get:function () {
            return cpfenviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.lenght !== 11 ) return false;
    
    const cpfparcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfparcial);
    
    return true;
};

ValidaCPF.prototype.criaDigito = function (cpfparcial) {
    const cpfArray = Array.from(cpfparcial);
    console.log(cpfArray)
};
const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo);
console.log(cpf.valida());
//cpf.Valida()