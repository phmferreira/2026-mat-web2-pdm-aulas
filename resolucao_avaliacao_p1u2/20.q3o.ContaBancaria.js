class ContaBancaria{
    #saldo;
    constructor(saldoInicial) {
        if (saldoInicial < 0) {
            throw new Error(
                'O saldo inicial não pode ser negativo!'
            );
        }
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error('O valor deve ser positivo!');
        }
        this.#saldo = this.#saldo + valor;
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error('O valor deve ser positivo!');
        }
        if (valor > this.#saldo) {
            throw new Error('Saldo insuficiente!')
        }

        this.#saldo = this.#saldo - valor;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        if (valor < 0) {
            throw new Error('O saldo não pode ser negativo!');
        }
        this.#saldo = valor;
    }
}

try {
    const contaBB = new ContaBancaria(10000);
    console.log(contaBB.saldo);
    contaBB.depositar(2000);
    console.log(contaBB.saldo);
    contaBB.sacar(-1500)
    console.log(contaBB.saldo);
    contaBB.saldo = 15000;
    console.log(contaBB.saldo);
} catch (erro) {
    console.log(erro.message);
}


