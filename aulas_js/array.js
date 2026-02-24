const alunos = ['João', 'Maria', 'Ana'];
const outroExemplo = ['Palavra',
    2, 4.7, true,
    ['outro array', 4, true], null
]
console.log(alunos);
console.log('Acessando posição 0');
console.log(alunos[0]);
console.log('Outro exemplo de acesso ao array!');
console.log(outroExemplo[4]);
console.log(outroExemplo[4][1]);

// aqui dá erro!!!
// alunos = ['Paulo', 'Ana', 'Pedro'];
// console.log(alunos);

// altera acessado a posição
alunos[0] = 'Mariana';
console.log(alunos);

// push -> vai adicionar 
// conteúdo no final do array
alunos.push('João');
console.log(alunos);

// pop - vai remover do final do array
let alunoRemovidoFinal = alunos.pop();
console.log('Aluno removido: ', alunoRemovidoFinal);
console.log(alunos);

// shift - vai remover do ínicio do array
let alunoRemovidoInicio = alunos.shift();
console.log('Aluno removido: ', alunoRemovidoInicio);
console.log(alunos);

// unshift - vai adicionar no ínicio do array
alunos.unshift('Luís');
console.log(alunos);


console.log(typeof alunos);
console.log(alunos instanceof Array);














