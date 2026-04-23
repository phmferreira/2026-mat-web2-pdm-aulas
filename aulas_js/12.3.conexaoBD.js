function leituraBD() {
    try {
        console.log(
            'Conectando Banco de Dados');
        console.log(naoExiste);
        console.log(
            'Autenticação ao Banco de Dados');
        console.log('Leitura dos dados');
        console.log('Tratamento dos dados');
    } catch (error) {
        console.log('Erro na leitura do BD');
    } finally {
        console.log(
            'Fechando conexão ao BD');
    }
}

leituraBD();