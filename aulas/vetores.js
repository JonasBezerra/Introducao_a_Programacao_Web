/* ==================================================
    VETORES ou ARRAYS ou variavel composta

    ° Pode ser uma Várivel Multipla
    ° Ou pode ser uma coleção de Objetos.
    ° É uma Variavel composta
    ° Array também é um Objeto.
*/

const alunos = [
    {
     nome: 'Jonas',
     nota: 9
    }, 
    {
     nome: 'Luiz',
     nota: 7
    },
    {
     nome: 'Fulano',
     nota: 6
    }
    ]

const nomAlunos = ['Jonas','Luiz','Ismael']

console.log(alunos); // mostra todo o array;
console.log(alunos[0]); // filtra um objeto especifíco e imprimi todos os seu atributos e métodos
console.log(alunos[1].nota) // pega um objeto, com um atributo especifíco dele;