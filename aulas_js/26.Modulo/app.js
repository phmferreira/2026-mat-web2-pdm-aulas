// const moduloExemplo = require('./modulo.js')

// console.log(moduloExemplo.nome);
// console.log(moduloExemplo.idade);
// console.log(moduloExemplo.nomeCompleto());

// exemplo de importe desestruturado
const { idade, nomeCompleto } = require('./modulo.js')
console.log(nomeCompleto());
console.log('Minha idade:', idade);




