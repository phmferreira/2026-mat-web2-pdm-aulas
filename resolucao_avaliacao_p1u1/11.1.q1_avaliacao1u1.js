function gerarTodosOsPodios(atletas) {
    let totalDeCombinacoes = 0;

    for (let pri = 0; pri < atletas.length; pri++) {
        const primeiro = atletas[pri];
        for (let seg = 0; seg < atletas.length; seg++) {
            const segundo = atletas[seg];
            if (seg !== pri) {
                for (let ter = 0; ter < atletas.length; ter++) {
                    const terceiro = atletas[ter];
                    
                }
            }
            
        }
        
    }

    
}

// // seria para gerar os primeiros
//     for (const primeiro of atletas) {
//         // seria para gerar os segundos
//         for (const segundo of atletas) {
//             if (segundo !== primeiro) {
//                 // gera os terceiros colocados
//                 for (const terceiro of atletas) {
//                     if (terceiro !== segundo &&
//                         terceiro !== primeiro
//                     ) {
//                         totalDeCombinacoes += 1;
//                         console.log(`: 1º: [${primeiro}], 
//                             2º: [${segundo}], 3º: [${terceiro}].`);
//                     }
//                 }
//             }
//         }
//     }
//     console.log('Total de pódios possíveis gerados:',
//             totalDeCombinacoes);