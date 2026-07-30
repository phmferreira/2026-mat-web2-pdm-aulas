async function obterEndereco(cep) {
    const resposta =
        await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        )
    const respostaJson = await resposta.json();
    if (respostaJson.erro) {
        throw new Error('CEP não encontrado!')
    }

    return {
        'lagradouro': respostaJson.logradouro,
        'localidade': respostaJson.localidade
    };
}

async function main() {
    try {
        let cep = '00000000';
        const resposta = await obterEndereco(cep);
        console.log(resposta);
    } catch (erro) {
        console.log(erro.message);
    }
    
}

main();