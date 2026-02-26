let alunos = ['João', 'Maria',
    'Ana', 'José'];
console.log(alunos);

// Implementar a remoção dado]
// uma posição
let indiceRemover = 2;
// fazer implementação usando slice
const arrayPrimeiraParte = alunos.slice(0, indiceRemover);
const arraySegundaParte =
    alunos.slice(indiceRemover + 1, alunos.length);
// concat
const resultadoComConcat =
    arrayPrimeiraParte.concat(arraySegundaParte);
console.log(resultadoComConcat);
// spread
const resultadoComSpread =
    [...arrayPrimeiraParte, ...arraySegundaParte];
console.log(resultadoComSpread);
// + (saber o que dá)
const resultadoComAdicao =
    arrayPrimeiraParte + arraySegundaParte;
console.log(resultadoComAdicao);


// Implementar a remoção dado o conteúdo
// Usar indexOf
let nomeRemover = 'José';

indiceRemover = alunos.indexOf(nomeRemover);