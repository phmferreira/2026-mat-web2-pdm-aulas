function autenticar(callback) {
    console.log('Autenticar');
    let chaveAcesso = 1;
    if (callback) callback(chaveAcesso);
}

function conexaoBD(chaveAcesso, callback) {
    console.log('Conectando ao BD');
    console.log('Usando a chave:', chaveAcesso);
    if (callback) callback();
}

autenticar((chave) => {
    conexaoBD(chave, () => {
        console.log('Fim conexão!');
    })
})
