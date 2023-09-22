//const number = [5,67,8,1,19,400,695,0,2,3,4];

//const filternumber = number.filter(value => value > 10);
//console.log(filternumber)

const people = [
{name : 'ana', idade : 19},
{name : 'twixanao', idade : 23},
{name : 'pedro', idade : 21 },
{name : 'daniel', idade : 7},
{name : 'miqueias', idade : 17 } //idade mental 4
];

const peopleWithLargeName = people.filter(obj => obj.name.length >= 5);
const peopleWith19age = people.filter(obj => obj.idade > 19);
const peopleWithLastName = people.filter(obj => obj.name.toLocaleLowerCase().endsWith('s'));
console.log(peopleWithLargeName);
console.log(peopleWith19age);
console.log(peopleWithLastName)