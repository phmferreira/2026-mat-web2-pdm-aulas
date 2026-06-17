function requisicaoWebPromise(msg, tempo) {
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

requisicaoWebPromise('Primeiro', 1500)
    .then(resposta => {
        console.log(resposta);
        return requisicaoWebPromise(1, 500);
    })
    .then(resposta => {
        console.log(resposta);
        return requisicaoWebPromise('Terceiro', 1000);
    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro.message));