/* ==================================================
    VETORES ou ARRAYS

    ° Pode ser uma Várivel Multipla
    ° Ou pode ser uma coleção de Objetos.
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

    const mediaAluno = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3

    console.log(`A média da sala é: ${mediaAluno.toFixed(1)}`)