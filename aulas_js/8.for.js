// laço de repetição clássico com for
for (let i = 0; i < 10; i++){
    console.log('O número é:', i);   
}

// outras maneiras de implementar com for
const frutas = [
    'Maçã', 'Pêra', 'Uva', 'Abacaxi'
];

// for clássico
for (let i = 0; i < frutas.length; i++){
    const fruta = frutas[i];
    console.log('A fruta atual é', fruta);
}

// em python
// for fruta in frutas:
//     print(fruta)

// for in em javascript - iteração por índice
for (const i in frutas) {
    console.log('A fruta atual é', frutas[i]);
}

// for of - iteração por conteúdo
for (const fruta of frutas) {
    console.log('A fruta atual é', fruta);
}

const aluno = {
    nome: 'João',
    sobrenome: 'da Silva',
    matricula: '2025000123'
}

// outra aplicação do for in
for (const atributo in aluno) {
    console.log(
        'Nome do atributo:', atributo);
    console.log(
        'Conteúdo do atributo:', aluno[atributo]);
}
