function buscarItemCaro(precos, valorCaro) {
    let indiceItemCaro = 0;
    while (precos[indiceItemCaro] < valorCaro
        && indiceItemCaro < precos.length
    ) {
        indiceItemCaro = indiceItemCaro + 1;
    }
    if (indiceItemCaro === precos.length) {
        indiceItemCaro = -1;
    }
    return indiceItemCaro;
}

let posicao =
    buscarItemCaro(
        [100, 150, 200, 90, 80, 500],
        4000
    );
console.log(posicao);
