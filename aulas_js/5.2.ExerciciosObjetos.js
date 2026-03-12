// q4

// padrão de projeto - factory
// função que cria objetos

function criarLivro(titulo, autor, paginas) {
    return {
        titulo,
        autor,
        paginas
    };
}

// console.log(
//     criarLivro('Título livro', 'João da Silva', 350));


const livros = [
    criarLivro('Livro 1', 'João da Silva', 350),
    criarLivro('Livro 2', 'Maria dos Santos', 456),
    criarLivro('Livro 3', 'Ana Silva', 876)
];

// console.log(livros);


// q3
// objeto calculadora

const calculadora = {
    resultado: undefined,

    soma: function (numero1, numero2) {
        this.resultado = numero1 + numero2;
    }
}

// console.log('Antes da soma',
//     calculadora.resultado);
calculadora.soma(4, 3);
// console.log('Depois da soma(4,3)',
//     calculadora.resultado);
calculadora.soma(-5, 9);
// console.log('Depois da soma(-5,9)',
//     calculadora.resultado);

// q2
let pessoa = {
    nome: 'Ana',
    idade: 25
}

// alterando a idade para 30 anos
pessoa.idade = 30;
// outra notação []
// pessoa['idade'] = 30;
console.log(pessoa);

// criando um novo atributo
// chamado cidade
pessoa.cidade = 'Itaporanga';
console.log(pessoa);

delete pessoa.nome;
console.log(pessoa);



