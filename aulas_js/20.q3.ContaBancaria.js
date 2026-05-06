class ContaBancaria{
    #saldo;

    constructor(saldoIncial) {
        if (saldoIncial < 0) {
            throw new Error(
                'O saldo inicial não pode ser negativo');
        }
        this.#saldo = saldoIncial;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error(
                'O valor do depósito deve ser positivo');
        }
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error('Mensagem');
        }
        if (valor > this.#saldo) {
            throw new Error(
                'Sem saldo suficiente');
        }
        this.#saldo -= valor;
    }
    
    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        if (valor < 0) {
            throw new Error(
                'O valor de saldo não pode ser negativo.');
        }
        this.#saldo = valor;
    }
}

const contaBB = new ContaBancaria(10000);
console.log(contaBB.saldo);
contaBB.depositar(1000)
console.log(contaBB.saldo);
contaBB.sacar(1500);
console.log(contaBB.saldo);
contaBB.saldo = -2000;



