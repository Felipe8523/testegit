function createPerson (Name, Surname) {
    return{
        Name, 
        Surname
    };
};
const Person = createPerson('tutato', 'ratatata');
console.log(Person)