
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

function numeros(num){
  let soma = 0;
  for(let i = 0; i< num.length; i++ ){
    soma += num[i];
  }
  return soma
}
console.log(numeros(num)); // JOGANDO O ARRAY NO PARAMETRO

