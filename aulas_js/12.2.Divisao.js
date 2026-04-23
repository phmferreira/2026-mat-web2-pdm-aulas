function dividir(a, b) {
    if (b === 0) {
        throw new Error(
            'Não pode dividir por zero'
        );
    }

    return a / b;
}

try {
    console.log(dividir(50, 5));
    console.log(dividir(50, 0));
} catch (erro) {
    console.log(erro.message);
}