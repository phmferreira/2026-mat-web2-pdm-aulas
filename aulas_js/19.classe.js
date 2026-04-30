class Pessoa {

    // construtor
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //método
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}

const maria = new Pessoa('Maria', 'Silva');
console.log(maria);
console.log(maria.nomeCompleto());
