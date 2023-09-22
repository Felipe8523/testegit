class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            Enumerable:true,
            configurable:false,
            value: cpfEnviado.replace(/\D+/g, '') 
        });
        
    }
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
      }

      static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
    
        for(let stringNumerica of cpfSemDigitos) {
          total += reverso * Number(stringNumerica);
          reverso--;
        }
    
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
      }
    

   
    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
      };
    
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequência()) return false;
        this.geraNovoCpf();
        return 'ta limpo';
    };
}


//let Validacpf = new ValidaCPF('070.987.720-03');
//Validacpf = new ValidaCPF('999.999.999-99')
//if (Validacpf.valida()) {
//    console.log('CPF VALIDO');
//} else{
//    console.log('CPF INVALIDO');
//}