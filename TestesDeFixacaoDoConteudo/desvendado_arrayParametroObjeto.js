
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

function numeros(numP){
  let soma = 0;
  for(let i = 0; i< numP.length; i++ ){
    soma += numP[i];
  }
  return soma
}
console.log(`A SOMA É: ${numeros(num)}`); // CHAMANDO A FUNÇÃO E JOGANDO O ARRAY COMO PARÂMETRO 


// EXEMPLO 2. VAMOS PERCORRE UM ATRIBUTO DE UM OBJETO QUE TEM UM ARRAY

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

  
  // METODO PARA SUBTRAIR A SOMA DAS DESPESAS E RECEITAS
function subReceitasDespesas(receitas,despesas){
  const somaR = somaReceitaDespesas(receitas); // METODO QUE RETORNA A SOMA DAS RECEITAS
  const somaD = somaReceitaDespesas(despesas) // METODO QUE RETORNA A SOMA DAS DESPESAS
    
  return somaR - somaD;

  }
function somaReceitaDespesas(srd){
  let soma = 0;
  for (let i = 0; i < srd.length; i++) {
    soma += srd[i];
  }
  return soma;
}


for (let i = 0; i < usuarios.length; i++) {
    const result = subReceitasDespesas(usuarios[i].receitas, usuarios[i].despesas) // LEMBRANDO QUE RECEITAS E DESPESAS SÃO ARRAYS. LOGO QND FOR PASSADO NO PARAMETRO DO METODO "subReceitasDespesas()" O PARAMETRO SERÁ UM ARRAY
    
    if (result >= 0 ) {
      console.log(`${usuarios[i].nome }, tem Saldo ${result.toFixed(2)}. Positivo`);
    } else {
      console.log(`${usuarios[i].nome}, tem saldo ${result.toFixed(2)}. Negativo`);
    }
}


