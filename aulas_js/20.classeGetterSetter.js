class Carro{
    #velocidade;

    constructor(nome) {
        this.nome = nome;
        this.#velocidade = 0;
    }

    get velocidade() {
        return this.#velocidade;
    }

    set velocidade(valor) {
        if(valor > 100){
            throw new
                Error(
                    'Valor acima da velocidade máxima!'
                );
        }
        this.#velocidade = valor;
    }

    acelerar() {
        if (this.#velocidade < 100) {
            this.#velocidade += 1;
        }
    }
    frear() {
        if (this.#velocidade >= 10) {
            this.#velocidade -= 10;
        } else {
            this.#velocidade = 0;
        }
    }
    estadoParado() {
        return this.#velocidade === 0;
    }
}

const hilux = new Carro('hilux');
console.log('Vel. inicial:', hilux.velocidade);
hilux.velocidade = 50;
console.log('Nova vel.:', hilux.velocidade);

for (let i = 0; i < 20; i++) {
    hilux.acelerar();
    console.log('Vel. atual:', hilux.velocidade);
}

while (!hilux.estadoParado()) {
    hilux.frear();
    console.log('Vel. atual:', hilux.velocidade);
}
