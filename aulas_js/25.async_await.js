function requisicao(msg, tempo) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (typeof msg !== 'string')
                        reject(new Error('Valor Inválido!'));
                    resolve(msg);
                }, tempo
            )
        }
    )
}

async function executar() {
    try {
        const resAbrir = await requisicao('Abrir arquivo', 1500);
        console.log(resAbrir);
        const resLer = await requisicao(3, 500);
        console.log(resLer);
        const resEscrever = await requisicao('Escrever arquivo', 1000);
        console.log(resEscrever);
        console.log('Finalização');
    } catch (erro) {
        console.log(erro.message);
    }
}

executar();