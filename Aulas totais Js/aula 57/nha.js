function People(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    
    const ID = 123456;

    const metodoInterno = function() {
        
    };
    
    this.metodo = function () {
        console.log(this.name + ': I am the metod');
    };
}
const p1 = new People('luiz', 'otario');
const p2 = new People('twix','anão')
p2.metodo();