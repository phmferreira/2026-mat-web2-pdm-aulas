// implementação de objetos em JS
const aluno = {
    nome: 'Maria',
    sobrenome: 'Silva',
    matricula: 1234,
    imprimir: function () {
        console.log(this.nome);
    }
}
// chamando o construtor de Object
const aluno2 = new Object();
aluno2.nome = 'João';
aluno2.sobrenome = 'Silva';
aluno2.matricula = 2345;
aluno2.imprimir = function () {
    console.log('Nome completo,',
        this.nome, this.sobrenome
    );
}

console.log(aluno);
console.log(aluno2);


