function ContaBancaria(
    nome, sobrenome, cpf, saldoInicial) {
    if (saldoInicial < 0) {
        throw new Error('O saldo inicial não pode ser negativo.')
    }
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.saldo = saldoInicial;

    this.depositar = function (valor) {
        if (valor <= 0) {
            throw new Error('O valor do depósito deve ser positivo.')
        }
        this.saldo += valor;
    }
    this.saque = function (valor) {
        if (valor > this.saldo) {
            throw new Error('Não há saldo suficiente');
        }
        this.saldo -= valor;
    }
}

try {
    const contaJoao = new ContaBancaria(
        'João', 'Silva',
        '111.222.333-44',
        -35000
    );
    contaJoao.depositar(10000);
    contaJoao.saque(15000);
} catch (error) {
    console.log(error.message);
}