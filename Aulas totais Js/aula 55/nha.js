function createpeople(name, LastName, Height, Weight) {
    return {
        name,
        LastName,
        get FullName() {
            return `${name} ${LastName}`;
        },
        speaKs(SubjectMaatter) {
            return `${this.FullName} it is ${SubjectMaatter}.`;
        },
        
        Height:Height,
        Weight:Weight,
        
        imc() {
            const indice = this.Weight / (this.Height ** 2);
            return indice.toFixed(2);
        }

    };

}

const p1 = createpeople('TWIX', 'ANÂO', 1.30, 80);
console.log(p1.imc());

const p2 = createpeople('Sung', 'jin oh', 1.91, 90);
console.log(p1.speaKs('talking about how small he is'));
// Get no IMC e usado para transformar o IMC em uma função
