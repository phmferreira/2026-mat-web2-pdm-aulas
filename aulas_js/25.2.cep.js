async function obterEndereco(cep) {
    const resposta =
        await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        )
    const respostaJson = await resposta.json();

    return respostaJson;
}

async function main() {
    let cep = 58780000;
    const resposta = await obterEndereco(cep);
    console.log(resposta);
}

main();