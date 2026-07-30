function aguardarSegundos(segundos) {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve('Tempo esgotado!');
                }, 1000 * segundos)
        }
    )
}

aguardarSegundos(1)
    .then(resp => console.log(resp))

async function executar() {
    const resposta = await aguardarSegundos(1);
    console.log(resposta);
}

executar();