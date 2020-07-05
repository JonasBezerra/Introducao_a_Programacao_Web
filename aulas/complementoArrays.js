/* O for in --> Itera sobre o nome das propriedades do Objeto. Ex: alunos[key].nome
        No exemplo Acima pra ele mostrar o nome ele vai ter que pegar a posição e a propriedade

   O for of --> Itera sobre os valores dessas propriedades. Ex: alunos.nome
        No exemplo acima ja pega diretamente o valor dessa propriedade
*/


let alunos = [{nome: 'Jonas', idade: 17, tecnologias:['Java', 'PHP']},
              {nome: 'Luis', idade:21,tecnologias:['JS', 'Android']}
                        
]
            
for (const key in alunos) { // Nesse caso Especifico para imprimir o valor desse atributo vamos ter q especificar a posição e o nome do atributo. Lê - se. Para cada posição em 'Nome do Objeto ou array'
    console.log(alunos[key].tecnologias);
}

console.log(`=========================================================`)
for (const i of alunos[0].tecnologias) { // Nesse caso ele ja vai imprimir diretamente o valor do atributo no console
    console.log(i);
}            

// mais atenção:
    /* Quando se tenta fazer uma iteração diretamente com um Objeto. Ira ter alguns BUGS.
    Nesse exemplo não teve. por quer é um array contendo um conjunto de Objetos:
    Mais por exmplo:
    
const Casa = {
area: 1000,
altura: 7,
andares: 2
}

for(let prop in Casa) {
  console.log(prop);
}

// Resultado
// area
// altura
// andares

No for in. TDO OK. No for of. Iria ter ulgumas falhas
    */