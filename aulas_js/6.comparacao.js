/*
Operadores de comparação
> maior que
< menor que
<= menor ou igual
>= maior ou igual

== igualdade (só valores - não recomendado)
=== igualdade estrita (valores e tipo dos valores)
!= diferença (só valores - não recomendado)
!== diferença estrita (valores e tipo)
*/
// Exemplo
const num1 = 10;
const num2 = '10';
console.log(num1 == num2); // resultado true
console.log(num1 === num2); // resultado false

/*
Operadores lógicos
&& -> operador e
|| -> operador ou
! -> operador negação
*/

console.log(true && true);
console.log(false || true);
console.log(!false);

function curtoCircuito() {
    console.log('Executou!!!');
    return true;
}

// exemplos de curtoCircuitos
console.log(false && curtoCircuito());
console.log(true || curtoCircuito());


