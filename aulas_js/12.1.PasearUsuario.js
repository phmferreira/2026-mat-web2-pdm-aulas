function parsearUsuario(JSONstring) {
    let objetoMensagem;
    try {
        objetoMensagem =
            JSON.parse(JSONstring);
    } catch (erro) {
        objetoMensagem = {
            erro: true,
            mensagem: 'JSON Inválido'
        };
    }

    return objetoMensagem;
}

let mensagem = `
{
    "nome": "João",
    "telefone": "8399900-1122
}
`

console.log(parsearUsuario(mensagem));
