import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function logger(req, res, next) {
    console.log('Tipo da requisição:', req.method);
    console.log('URL da requisição:', req.url);
    next();
}

app.use(logger);

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

// c
app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || !preco) {
        res.status(400).json(
            {
                mensagem: "nome e preco são obrigatórios"
            }
        );
        return;
    }
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);

});

// c - front-end
app.get('/cadastrar', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log('Executando o serviço...');
    console.log(`http://localhost:${port}`);
});