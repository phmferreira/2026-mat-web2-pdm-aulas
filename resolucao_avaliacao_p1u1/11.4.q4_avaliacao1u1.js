function gerarRelatorioPromocao(listaDeProdutos) {
    produtosNaPromocao = [];
    valorTotalPromocao = 0;

    for (const produto of listaDeProdutos) {
        if (produto.estoque > 0) {
            produto.precoUnitario -= 0.15 * produto.precoUnitario;
            valorTotalPromocao += produto.estoque * produto.precoUnitario;
            produtosNaPromocao.push(produto);
        }
    }
    return {
        produtosNaPromocao,
        valorTotalPromocao
    }
}