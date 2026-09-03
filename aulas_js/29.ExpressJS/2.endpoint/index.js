import express from "express";

const app = express();
const port = 3000;

const alunos = [
    {
        id: 1,
        nome: 'João',
        matricula: '123'
    },{
        id: 2,
        nome: 'Maria',
        matricula: '321'
    }
];


app.get('/', (req, res) => {
    res.send('<h1>Olá, bem-vindo!</h1>')
})

app.get('/ola', (req, res) => {
    let nome = req.query.nome;
    if (nome) {
        res.send(`Olá, bem-vindo, ${nome}!`)
    }
    res.send('Olá, bem-vindo ao este site!')
})

app.get('/ola/:nome/:cidade', (req, res) => {
    res.send(`<h1>Olá, bem-vindo, ${req.params.nome}!</h1><p>${req.params.cidade}</p>`)
})

app.get('/alunos', (req, res) => {
    res.json(alunos);
})

app.get('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const alunoBuscado =
        alunos.find(aluno => aluno.id === id);
    if (!alunoBuscado) {
        res.status(404).json({
            mensagem: "Aluno não encontrado."
        })
    }
    res.json(alunoBuscado);
})

app.listen(port, () => {
    console.log('Serviço executando');
    console.log(`http://localhost:${port}`); 
})