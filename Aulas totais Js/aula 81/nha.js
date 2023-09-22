const Guys = [
    {id: 3, name: 'pedro'},
    {id: 2, name: 'dante'},
    {id: 1, name: 'king'},
];

const newGuys = new Map();
for(const Person of Guys ) { 
    const { id } = Person;
    newGuys.set(id, { ...Person });
}
console.log(newGuys)