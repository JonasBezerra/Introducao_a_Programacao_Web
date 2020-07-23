const usuarios = [
    {
        nome: 'Salvio',
        receitas:[115.3,44.7,90.3,14.5],
        despesas:[85.3,13.5,19.9]
    },
    {
        nome: 'Marcio',
        receitas:[24.6,214.6,45.],
        despesas:[185.3,12.1,120.0]
    },
    {
        nome: 'Lucia',
        receitas:[9.8,120.3,340.2,45.3],
        despesas:[450.2,29.9]
    }
];

// CALCULA A SOMA DE RECEITAS
// CALCULA A SOMA DE DESPESAS
// DE usuarios
// RETORNAR SALDO RECEITAS - DESPESAS

// FUNÇÃO calculaSaldo RECEBE RECEITAS E DESPESAS
// DO usuarios
// receitas É UM ARRAY
// despesas É UM ARRAY

function calculaSaldo(receitas,despesas) {

    // PRECISO USAR O METODO somaNumeros
    let somaReceitas = somaNumeros(receitas)
    let somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
    // DEVE RETORNAR RECEITAS - DESPESAS
}

// numeros É UM ARRAY
function somaNumeros(numeros) {
    // SOMA TODOS NUMEROS DENTRO DO array "numeros"
    let somaNumeros = 0
    for (const numero of numeros) {
        somaNumeros += numero
    }

    return somaNumeros
    // RETORNA A SOMA DOS NÚMEROS
}

for (const usuario of usuarios) {
    // para cada usuario 
    // chame a função calculaSaldo
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if(saldo >0){
        console.log(`\t${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(1)}`)
    }else{
        console.log(`\t${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(1)}`)
    }
}
