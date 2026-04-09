function soma(num1, num2) {
    if (typeof num1 !== 'number' || 
        typeof num2 !== 'number'
    ) {
        throw new TypeError('Erro no tipo dos dados. Precisam ser numéricos.')
    }

    return num1 + num2;
}

console.log(soma(1, 2));
console.log(soma('1', 2));

