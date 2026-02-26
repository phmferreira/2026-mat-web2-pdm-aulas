function olaMundo() {
    console.log('Olá, mundo!');
}
olaMundo();

// exemplo 2
// saída - retorno de dados após a execução
function olaMundoComRetorno() {
    return 'Olá, mundo!';
}

const mensagem = olaMundoComRetorno();
console.log(mensagem);

// exemplo 3 - com parâmetro (entrada)
function olaPessoa(nomeEntrada) {
    nomeEntrada = 'Olá, ' + nomeEntrada;
    // return `Olá, ${nomeEntrada}`;
    return nomeEntrada;
}

function olaPessoaV2(nome) {
    return `Olá, ${nome}`;
}
let nome = 'João';
console.log(olaPessoaV2('Maria'));
console.log(nome);

// console.log(nomeEntrada);

function soma(x, y) {
    console.log('Antes do return!');
    return x + y;
    console.log('Depois do return!');
    
}

// function name(params) {
//     // if (alguma) {
//     //     return
//     // } else {
//     //     return
//     // }

//     return
// }

console.log(soma(2, 3));
console.log(soma('Paulo', ' Henrique'));

function somaComValoresPadroes(x = 0, y = 0) {
    return x + y;
}

console.log(somaComValoresPadroes());
console.log(somaComValoresPadroes(5));

let somaPadrao = somaComValoresPadroes;
const guardandoUmaFuncao = function (numero) {
    return numero ** 2;
}

function executarFuncao(funcao) {
    return console.log(funcao(5));
}
executarFuncao(somaPadrao);
executarFuncao(somaComValoresPadroes);
executarFuncao(guardandoUmaFuncao);


// notação seta - função seta

let somaDoisNumeros = (num1, num2) => {
    return num1 + num2;
}
let somaUmaLinha = (num1, num2) => num1 + num2;
let somaDois = numero => numero + 2;
let somaFixa = () => 2 + 3;

console.log('Notação seta ou função seta');
console.log(somaDoisNumeros(1, 5));
console.log(somaUmaLinha(4, 7));
console.log(somaDois(6));
console.log(somaFixa());








