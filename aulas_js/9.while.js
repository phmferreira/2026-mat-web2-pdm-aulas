// ideia
// dois comandos para laço:
// for e while
// quando usar o for?
// quando usar o while?


// busca linear
let numeros = [1, -2, 0, 19, 10, 16];
let numeroBuscado = 10;

// alg. deve retornar a posição
// no array do numeroBuscado

let sairDoLaco = false;
let index = 0;
let posicao = -1;
while (sairDoLaco == false) {
    let numeroAtual = numeros[index];
    if (numeroAtual === numeroBuscado) {
        posicao = index;
        sairDoLaco = true;
    } else if (index < (numeros.length - 1)) {
        index = index + 1;
    } else {
        // chegou ao final e não encontrou
        sairDoLaco = true;
    }
}

function numAleatorio(min, max) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

let num;
do {
    num = numAleatorio(1, 20);
    console.log(num);
} while (num !== 10);