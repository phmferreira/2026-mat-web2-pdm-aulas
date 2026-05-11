class AnimalPet {
    constructor(nome) {
        this.nome = nome;
    }
    comer() {
        console.log(`${this.nome} está comendo!`);
    }
}

class Cachorro extends AnimalPet{
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    latir() {
        console.log(
            `${this.nome} está latindo!`
        );
    }
    latir(estado) { }
    // não existe sobrecarga em JS
    latir(estado, velocidade) { }
    comer() {
        
    }
}

const max = new Cachorro('Max', 'Pastor Alemão');
max.comer();
console.log('A raça:', max.raca);
max.latir();

