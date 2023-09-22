//break e continue
const number = [1, 2, 3, 4, 5, 6, 7];
for (let numero of number) {
    if (numero === 2 || numero === 5) {
        continue
    }
    if (numero ===6) {
        break
    }
    
    console.log(numero)
}
