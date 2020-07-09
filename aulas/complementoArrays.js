/* O for in --> Itera sobre o nome das propriedades do Objeto. 
        a posição de um array é como se fosse a propriedade desse array

   O for of --> Itera sobre os valores dessas propriedades. 
        
*/


let alunos = [{nome: 'Jonas',  tecnologias:['Java', 'PHP']}, // como array --> const a = ['Jonas', idade] --> presta atenção. 
              {nome: 'Luis',tecnologias:['JS', 'Android']}
                        
]
            
for (const key in alunos) { // Nesse caso Especifico para imprimir o valor desse atributo vamos ter q especificar a posição e o nome do atributo. Lê - se. Para cada posição em 'Nome do Objeto ou array'
    console.log(alunos[key].tecnologias);
}

console.log(`=========================================================`)


    for (let tecnologia of alunos.tecnologias) {
        console.log(tecnologias)

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