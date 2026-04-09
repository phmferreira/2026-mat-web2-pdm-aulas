let nome = 'João';

try {
    console.log('Seu nome é:',
        name);
} catch (error) {
    console.log(error);
    console.log('Nome mal digitado!');   
}

// segundo exemplo
try {
    console.log('Abrir um arquivo');
    console.log(naoExisto);
    console.log('Escrever no arquivo');
} catch (error) {
    console.log('Erro na manipulação do arquivo!');   
} finally {
    console.log('Fechar o arquivo');
}