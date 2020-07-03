/* ====================================================
    OPERADORES LÓGICOS

    &&  "E" As duas condições devem ser verdadeiros 
        para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira 
        para que a condição final seja verdadeira.
    !   "NÃO" Nega uma condição    

=====================================================*/

console.log(" ============== && ========= \n")
console.log( 5 == 5 && 6 == 6 ) // true
console.log( 5 == 5 && 2 == 6 ) // false
console.log( 5 == 5 && 6 == 7 ) // false

console.log("\n ============== OU ========= \n")
console.log( 5 == 5 || 6 == 6 ) // true
console.log( 5 == 5 || 5 == 6 ) // true
console.log( 5 == 5 || 6 == 7 ) // true

console.log("\n ============== ! ========= \n")
console.log( !(5 == 5) ) // false
console.log( !(5 != 5) ) // true

const idade = 17

if (!(idade >= 18) || idade === 17) {
    console.log(`\nBloquear Entrada!.`)
} else {
    console.log(`\nDeixar entrar`)
}
 
/* =======================================
    OPERADPRES ARITMÉDICOS
    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição 
    -   Subtração

==========================================*/

console.log("\n"+2 * 2)      // 4
console.log(2 / 2)      // 1
console.log(2 % 1.5)    // 0.5
console.log(2 + 2)      // 4
console.log(2 - 2)      // 0  
