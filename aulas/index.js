// criar programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da média


const aluno01 = "Jonas"
const notaAluno01 = 9.8

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03)/3

// se a média for maior que 5 parabenizar a turma

if(media > 5){ // true
    // Faz alguma Coisa
    console.log(`A nota foi  de ${media.toFixed(1)} Parabéns a Turma!.`)
}else{
    // Faz putra Coisa
    console.log(`A Nota da turma foi: ${media}média foi Menor que 5`)
}




