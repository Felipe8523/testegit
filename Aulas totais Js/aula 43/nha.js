function fizzbuzz(number){
    if (typeof number !== 'number') return NaN
    if (number % 3===0 && number % 5 === 0) return 'fizzbuzz'
    if (number % 3 === 0) return 'fizz'
    if (number % 5 === 0) return 'buzz'
    return number
} 

for(let i = 0; i<= 100; i++){
    console.log(i, fizzbuzz(i));
}