// comandos condicionais
const hora = 10;

if (hora < 12) {
    console.log('Bom dia!');
} else if (hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}

// operador ternário
// condicao ? se_for_verdade : caso_contrário
// exemplo
const nota1 = 65;
const nota2 = 65;
const media = (nota1 + nota2) / 2;
let sit = media >= 70 ? 'aprovado' : 'em recuperação';
console.log('Situação:', sit);
