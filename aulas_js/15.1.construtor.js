// implmentando um construtor

function Aluno(
    nome, sobrenome, matricula) {

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.matricula = matricula;
    this.nomeCompleto = function () {
        return this.nome + " "
            + this.sobrenome;
    }
}

const aluno = new Aluno(
    'Maria', 'Silva', 1234);
console.log(aluno);
console.log(aluno.nomeCompleto());

const aluno2 = new Aluno(
    'João', 'Silva', 2345);
console.log(aluno2);
console.log(aluno2.nomeCompleto());