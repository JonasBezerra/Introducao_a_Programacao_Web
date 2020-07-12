// SO PARA LEMBRAR DO CONCEITO DE POO. OBJETOS PODEM TER ATRIBUTOS IGUAIS, MAS NÃO COM O MESMO VALOR
const calculadora = [
    {n1: 10, n2: 3},
    {n1: 90, n2: 4},// ESSE OBJETO TEM O MESMO ATRIBUTO QUE O OBJETO ACIMA. PORÉM OS VALORES SÃO DIFERENTES
    {n1: 120, n2:30},
    {n1: 600, n2: 2}
]

function somar(calculadora){
    let soma = 0;
    for (let vAtributo of calculadora) {// ATE ESSA LINHA O (vAtributo) --> terá o valor {n1: 10, n2: 3}...
    // OU SEJA (vAtributo) PEGA O OBJETO TODO COM TODOS OS ATRIBUTOS E MÉTODOD CONTIDO NELE
        soma = vAtributo.n1 + vAtributo.n2; // AQUI (vAtributo.n1),  (vAtributo.n2) --> terá o valor 10,3
    }
    return soma;
}



console.log(somar(calculadora)) // soma os valores de todos os objetos