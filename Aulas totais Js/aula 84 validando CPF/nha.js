class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const Campovalidos = this.Campovalidos();

    }
    Campovalidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar'))
            if(!campo.value) {
                this.createErro(campo,'Campos não podem ficar em branco.');
                valid = false;
            }

        if(this.campo.classList.contains('cpf')) {
            if(!this.validaCPF()) valid=false; {

            }
            
                
        
    }
    }
    

    createErro(campo,msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
