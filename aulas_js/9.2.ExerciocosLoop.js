function criarLivro(titulo, autor, paginas) {
    return {
        titulo,
        autor,
        paginas
    };
}

const livros = [
    criarLivro('Aprendendo a programar', 'João da Silva', 350),
    criarLivro('Javascript com NodeJs', 'Maria dos Santos', 456),
    criarLivro('Como gostar de programar com JS', 'Ana Silva', 876)
];

function extrairConteudos(lista, atributo) {
    let conteudos = [];
    for (let item of lista) {
        conteudos.push(item[atributo])
    }
    return conteudos;
}

let resultado = extrairConteudos(livros, 'titulo');
console.log(resultado);

// q2
// busca melhorada
function buscaLinearMelhorada(numeros, numeroBuscado) {
    let posicao = -1;
    let indiceAtual = 0;
    let pararBusca = false;
    while (pararBusca == false) {
        let numeroAtual = numeros[indiceAtual];
        if (numeroAtual === numeroBuscado) {
            posicao = indiceAtual;
            pararBusca = true;
        } else if (numeroAtual > numeroBuscado) {
            pararBusca = true
        } else if (indiceAtual === numeros.length - 1) {
            pararBusca = true;
        }
        indiceAtual++;
    }
    return posicao;
}




