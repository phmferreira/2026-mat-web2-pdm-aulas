function Livro(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.detalhes = function () {
        return `O livro ${this.titulo} do autor ${this.autor} foi pulbicado no ano de ${this.ano}.`
    }
}

// criando instâncias de Livro
const livroHarryPotter =
    new Livro("Harry Potter e a Pedra Filosofal",
        "J. K. Rowling",
        1997);
console.log(livroHarryPotter);
console.log(livroHarryPotter.detalhes());

