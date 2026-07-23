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

requisicaoWebPromise('Abrir arquivo', 1500)
    .then(resposta => {
        console.log(resposta);
        return requisicaoWebPromise(2, 500);
    })
    .then(resposta => {
        console.log(resposta);
        return requisicaoWebPromise('Escrita do arquivo', 1000);
    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro.message));

const promises = [
    requisicaoWebPromise('Abrir arquivo', 1500),
    requisicaoWebPromise('Ler arquivo', 500),
    requisicaoWebPromise('Escrever arquivo', 1000)
]

// Promise.all
// Promise.all(promises)
//     .then(resposta => console.log(resposta))
//     .catch(erro => console.log(erro.message))
// Promise.race

// Promise.race(promises)
//     .then(resposta => console.log(resposta))
//     .catch(erro => console.log(erro.message))