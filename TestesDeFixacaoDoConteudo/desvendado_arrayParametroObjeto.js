
// IMPORTANTE LEMBRA SOBRE VARIAVEIS SIMPLES;
//    ° ACEITAM APENAS 1 VALOR POR VEZ


/*
let soma = 0;
function numeros(numeros){
    soma = soma + numeros
    return soma;
}

console.log(numeros(2))
console.log(numeros(8))

// 2
// 10

*/

const num = [12,12,23] // O OBJETO QUE FICARÁ COMO PARÂMETRO
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
  }]

function numeros(num){
  let soma = 0;
  for(let i = 0; i< num.length; i++ ){
    soma += num[i];
  }
  return soma
}
console.log(numeros(`A SOMA É: ${num}`)); // JOGANDO O ARRAY NO PARAMETRO


// EXEMPLO 2. VAMOS PERCORRE UM ATRIBUTO DE UM OBJETO QUE TEM UM ARRAY

function somaReceitaDespesas(srd){
  let soma = 0;
    for (let i = 0; i < srd.length; i++) {
      soma += srd[i];
    }
    return soma;
}
function subReceitasDespesas(receitas,despesas){
  const somaR = somaReceitaDespesas(receitas);
  const somaD = somaReceitaDespesas(despesas)

  return somaR - somaD;
}


for (let i = 0; i < usuarios.length; i++) {
    const result = subReceitasDespesas(usuarios[i].receitas, usuarios[i].despesas)
    
    if (result >= 0 ) {
      console.log(`${usuarios[i].nome }, tem Saldo ${result.toFixed(2)}. Positivo`);
    } else {
      console.log(`${usuarios[i].nome}, tem saldo ${result.toFixed(2)}. Negativo`);
    }
}


