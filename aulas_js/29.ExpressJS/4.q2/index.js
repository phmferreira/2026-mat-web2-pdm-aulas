import express from 'express';

const app = express();
const port = 8080;

const produtos = [
  {
    id: 1,
    nome: "Água com gás",
    preco: 3
  },
  {
    id: 2,
    nome: "Batata",
    preco: 8
  },
  {
    id: 3,
    nome: "Cachorro-quente",
    preco: 10
  },
];

// a
app.get('/produtos', (req, res) => {
    res.json(produtos);
})

// b
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produtoBuscado =
        produtos.find(p => p.id === id);
    if (!produtoBuscado) {
        res.status(404).json(
            {
                mensagem: "produto não encontrado"
            }
        );
        return;
    }
    res.json(produtoBuscado);
});

app.listen(port, () => {
    console.log('Executando o serviço...');
    console.log(`http://localhost:${port}`);
});