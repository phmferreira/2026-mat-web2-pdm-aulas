function Aluno(
    nome, sobrenome, matricula, cpf) {
    const data = new Date();
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.matricula = matricula;
    
    Object.defineProperty(this, 'cpf',
        {
            value: cpf,
            enumerable: true,
            writable: true,
            configurable: true
        }
    )
}

const alunaMaria = new Aluno(
    'Maria', 'Santos', '112234',
    '111.222.333-44'
);
console.log(alunaMaria);
alunaMaria.cpf = '999.888.777-66';
// deletar
delete alunaMaria.cpf;
// modificar as definições
// Object.defineProperty(alunaMaria, 'cpf',
//     {
//         writable: false
//     }
// );

console.log(alunaMaria);
