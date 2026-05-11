class Personagem {
    constructor(nome) {
        this.nome = nome;
        this.vida = 100;
    }
    atacar() {
        console.log(`${this.nome} atacou.`);
        
    }
}

class Guerreiro extends Personagem{
    constructor(nome, forca) {
        super(nome);
        this.forca = forca;
    }
    // exemplo de sobreescrita
    atacar() {
        console.log(
            `${this.nome} atacou com a espada e` +
            ` com força de ${this.forca}.`
        );
        
    }
}

class Mago extends Personagem{
    atacar() {
        console.log(`${this.nome} atacou com magia.`);
    }
}

// exemplo
const zelda = new Guerreiro('Zelda', 25);
// zelda.atacar();

personagens = [];
personagens.push(zelda);
personagens.push(new Personagem('Ryu'));
personagens.push(new Mago('Dalsin'));

personagens.forEach(personagem => {
    personagem.atacar()
});