/* ==========================================
    OPERADORES DE COMPARAÇÃO
    
    >   MAIOR
    <   MENOR
    >=  MAIOR IGUAL A
    <=  MENOR IGUAL A
    ==  IGUAL A
    === IGUAL E DO MESMO TIPO
    !=  DIFERENTE DE
    !== DIFERENTE, INCLUSIVE DO TIPO

==============================================*/


console.log( 5 > 4 )  // true
console.log( 5< 4 )   // false
console.log( 5 >= 4 ) // true
console.log( 4 <= 4 ) // true

console.log('\n================================\n')
console.log( 4 == "4" )   // true
console.log( 4 === "4" )  // false.
console.log( 4 != "5"); // true
console.log( 4 !== "5") // true

// DESAFIO 1
// verificar se a pessoa é maior igual de 18 anos
// se sim, deixar entrar, senão, bloquear a entrada

const idade = 17

if (idade >= 18) {
    console.log(`\nDeixar entrar`)
} else {
    console.log(`\nBloquear Entrada!.`)
}

// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

if(idade == 17){
    console.log(`Volte quando fizer ${idade} anos!.\n`)
}
