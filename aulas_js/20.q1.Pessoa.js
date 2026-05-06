class Pessoa{

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}`
            + ` e tenho ${this.idade} anos.`;
    }
}

const maria = new Pessoa('Maria', 20);
console.log(maria);
console.log(maria.apresentar());

