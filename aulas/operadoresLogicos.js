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



