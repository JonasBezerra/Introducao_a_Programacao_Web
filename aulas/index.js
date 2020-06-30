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

if(media > 5){
    console.log(`A nota foi  de ${media}. Parabéns a Turma!.`)
}else{
    console.log(``)
}
console.log(`A Nota dos Alunos é ${media}`);



