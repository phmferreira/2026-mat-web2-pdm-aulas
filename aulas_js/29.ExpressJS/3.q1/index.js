import express from 'express';

const app = express();
const port = 8080;

app.get('/sobre', (req, res) => {
    res.send('<h1> Olá, site de resposta da lista</h1>');
});

app.get('/saudacao', (req, res) => {
    let nome = req.query.nome || 'visitante';
    res.send(`Olá, ${nome}`);
})

app.get('/ping', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.get('/erro', (req, res) => {
    res.status(404).json({ mensagem: "Página não encontrada." });
});

app.listen(port, () => {
    console.log('Executando o serviço...');
    console.log(`http://localhost:${port}`);
});