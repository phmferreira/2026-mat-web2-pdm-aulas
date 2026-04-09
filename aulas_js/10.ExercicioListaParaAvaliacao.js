// function avaliarAlunos(listaDeAlunos) {
//     const aprovados = [];
//     const reprovados = [];

//     for (const aluno of listaDeAlunos) {
//         if (aluno.nota >= 7.0) {
//             aprovados.push(aluno.nome);
//         } else {
//             reprovados.push(aluno.nome)
//         }
//     }
//     return {
//         aprovados: aprovados,
//         reprovados: reprovados
//     };
// }

// const turmaA = [
//   { nome: "Alice", nota: 8.5 },
//   { nome: "Bruno", nota: 6.0 },
//   { nome: "Carla", nota: 9.0 },
//   { nome: "Daniel", nota: 7.0 },
//   { nome: "Eva", nota: 5.5 }
// ];

// console.log(avaliarAlunos(turmaA));
// /* Saída esperada:
// {
//   aprovados: ["Alice", "Carla", "Daniel"],
//   reprovados: ["Bruno", "Eva"]
// }
// */

// const turmaB = [
//   { nome: "Fernando", nota: 6.9 },
//   { nome: "Gabriela", nota: 7.1 }
// ];

// console.log(avaliarAlunos(turmaB));
// /* Saída esperada:
// {
//   aprovados: ["Gabriela"],
//   reprovados: ["Fernando"]
// }
// */

// console.log(avaliarAlunos([]));
// /* Saída esperada:
// {
//   aprovados: [],
//   reprovados: []
// }
// */


function analisarSequenciaDeVotos(sequencia) {
    let totalVotos = 0;
    let mediaVotos;
    let votoMaisJovem;

    let indiceAtual = 0;
    let pararAnalise = false;

    while (pararAnalise == false) {
        const idadeAtual = sequencia[indiceAtual];
        if (idadeAtual >= 16) {
            totalVotos = totalVotos + 1;
            if (indiceAtual === 0) {
                mediaVotos = idadeAtual;
                votoMaisJovem = idadeAtual;
            } else {
                mediaVotos =
                    (mediaVotos * (totalVotos - 1) + idadeAtual)
                    / totalVotos;
                if (idadeAtual < votoMaisJovem) {
                    votoMaisJovem = idadeAtual;
                }
            }
        } else {
            pararAnalise = true;
        }
        indiceAtual = indiceAtual + 1;
        if (indiceAtual === sequencia.length) {
            pararAnalise = true;
        }
    }
    return {
        totalVotos,
        mediaVotos,
        votoMaisJovem
    }
}

console.log(analisarSequenciaDeVotos([25, 40, 18, 55, 15, 60]));
/* Saída esperada:
{
  totalVotos: 4,
  mediaIdade: 34.5,
  votoMaisJovem: 18
}
*/
