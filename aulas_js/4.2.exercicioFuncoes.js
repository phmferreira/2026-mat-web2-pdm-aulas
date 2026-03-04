// q1
// console a mensagem 'Bom dia, Mundo!'
function bomDia() {
    console.log('Bom dia, Mundo!');
}
// outra forma - usando a notação seta

let bomDiaMensagem = () => {
    console.log('Bom dia na notação seta, mundo!');
}

bomDia();
bomDiaMensagem();

//q2 - elevar ao cubo um número
function cubo(numero) {
    // primeira forma
    // return numero * numero * numero;
    // outra forma
    // return numero ** 3
    // mais outra forma
    return Math.pow(numero, 3);
}

//q4
/// de Fahrenheit para Celsius
function fahrenheitParaCelsius(tempFahrenheit) {
    return (tempFahrenheit - 32) * 5 / 9;
}

// q6
function imc(peso = 0, altura = 1.5) {
    let imc = peso / (altura ** 2);
    return imc.toFixed(2);
}
console.log('Valor IMC de 50kg, 1.65m:');
console.log(imc(50, 1.65), 'kg');

// q desafio
// calcula o fatorial de um número
// fazer usando recursão
// 
function fatorial(numero) {
    // caso base - 0! = 1
    let resultado;
    if (numero === 0) {
        resultado = 1;
    } else {
        resultado = numero * fatorial(numero - 1);
    }
    return resultado;
} 