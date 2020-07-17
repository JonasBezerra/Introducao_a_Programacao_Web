/*=============================================
    OBJETOS EM JS.
    
*/

const aluno01 = { // CRIEI UM OBETO
    nome: 'Jonas',
    nota: 10
}

const aluno02 = {
    nome: 'Josué',
    nota: 9.4
}

const aluno03 = {
    nome: 'Fulano',
    nota: 5
}

const mediaAlunos = (aluno01.nota + aluno02.nota + aluno03.nota)/3
console.log(`\nA Media da turma é: ${mediaAlunos.toFixed(1)}\n`);


// ======================================

const alunos =  [{nome: 'Jonas'}, {nome: 'Karina'}]

console.table(alunos)// imprime o array em formato de tabela

alunos[0].idade = 18// o aluno da posiçao 0 recebe idade = 18

console.table(alunos)
console.log(alunos[2])