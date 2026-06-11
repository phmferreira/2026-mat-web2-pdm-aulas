function requisicaoWeb(msg, tempo) {
    setTimeout(
        () => {
            console.log(msg);
        },
        tempo
    )
}

// exemplificando
// requisicaoWeb('Abrir arquivo', 1500);
// requisicaoWeb('Leitura do arquivo', 500);
// requisicaoWeb('Escrita no arquivo', 1000);
// console.log('Isso executa primeiro');

// exemplo básico de callback
function executar(funcaoCallBack) {
    return funcaoCallBack()
}


function requisicaoWebCallBack(msg, tempo, callback) {
    setTimeout(
        () => {
            console.log(msg);
            callback();
        },
        tempo
    )
}

// requisicaoWebCallBack('Primeiro', 1500, () => {
//     requisicaoWebCallBack('Segundo', 500, () => {
//         requisicaoWebCallBack('Terceiro', 1000, () => {
//             console.log('Isso vai executar primeiro');
            
//         })
//     })
// });



function requisicaoWebPromise(msg, tempo) {
    return new Promise(
        (resolve, _) => {
            setTimeout(
                () => {
                    resolve(msg);
                }, tempo
            )
        }
    )
}

requisicaoWebPromise('Primeiro', 1500)
    .then(resposta => {
        console.log(resposta);
        return requisicaoWebPromise('Segundo', 500);
    })
    .then(resposta => {
        console.log(resposta);
        return requisicaoWebPromise('Terceiro', 1000);
    })
    .then(resposta => console.log(resposta));