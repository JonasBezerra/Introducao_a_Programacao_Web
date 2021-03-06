// Soma de despesas e receitas

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas) // antes de perder o valor ele armazena na variavel 'somaReceitas'
    const somaDespesas = somaNumeros(despesas) // aqui ele ja perdeu o valor e ta fazendo a soma das Despesas e armazenando na variavel
    
    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    let soma = 0 
    for(let i = 0 ; i <numeros.length; i++){
      soma = soma + numeros[i]
    }
  return soma
}

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas) // ate aqui ele vai pegar tudo dentro do array receita e despesas
    
    // MUITA ATENÇÃO. RECEITAS E DESPESAS SAO ARRAYS
    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}