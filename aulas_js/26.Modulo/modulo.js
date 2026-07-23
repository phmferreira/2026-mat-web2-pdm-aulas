// npm init -y
// inicia o projeto

const nome = 'João';
const sobrenome = 'Silva';
const idade = 17;
const apresentar = () => {
    return `Meu nome é ${nome} ${sobrenome}.`
}

// console.log(module);

module.exports.nome = nome;
module.exports.idade = idade;
module.exports.nomeCompleto = apresentar

// module.exports = {
//     nome, idade, nomeCompleto
// };

// exports.nome = nome;
// this.idade = idade;

// console.log(module);
