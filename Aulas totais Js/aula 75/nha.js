const objA = {
    chave: 'a'
};
const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objB);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveC);