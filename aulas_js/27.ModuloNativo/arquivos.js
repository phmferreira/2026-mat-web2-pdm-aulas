// const fs = require('node:fs');
const { log } = require('node:console');

// fs.writeFile('arquivo.txt', 'Olá mundo!',
//     (err) => {
//         if (err) throw err;
//         log('Arquivo foi escrito com sucesso!');
//     }
// )

const fs = require('node:fs/promises');
fs.writeFile('arquivoPromise.txt', 'Olá, mundo 2')
    .then(() => log('Arquivo escrito com sucesso'))
    .catch((err) => log(err.message));

