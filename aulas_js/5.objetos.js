const aluno = {
    nome: 'João',
    sobrenome: 'da Silva',
    matricula: 123456,
    matriculaAtiva: true,
    disciplinas: ['pt', 'mat', 'web2', 'pdm'],
    endereco: {
        rua: 'Rua principal',
        numero: 10,
        cidade: 'Itaporanga'
    },

    matricular() {
        this.disciplinas.push('ADS')
        console.log(
            `Verifica matricula ativa:${this.matriculaAtiva},
            acessando matricula: ${this.matricula},
            alterando disciplinas: ${this.disciplinas}`
        );
    },

    olaAluno() {
        console.log(`Olá, eu sou ${this.nome}`);
    }
}
console.log(aluno);

// duas formas de acesso
// .
console.log('Nome com .:', aluno.nome);
// []
console.log('Nome com []:', aluno['nome']);
// acessando a rua do aluno
console.log('Nome da rua:', aluno.endereco.rua);
console.log('Nome da rua:', aluno['endereco'].rua);
console.log('Nome da rua:', aluno['endereco']['rua']);


aluno.olaAluno();
aluno.matricular();